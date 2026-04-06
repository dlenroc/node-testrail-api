import type { TestRailConfig } from '../TestRailConfig.ts';

export type RequestOptions = {
  method?: string | undefined;
  query?: Record<string, unknown> | undefined;
  json?: unknown | undefined;
  form?: [name: string, value: Blob | string, fileName?: string][] | undefined;
  signal?: AbortSignal | undefined;
};

export type Executor = (path: string, options: RequestOptions) => Promise<Response>;

export function createExecutor(config?: TestRailConfig): Executor {
  const baseURL = config?.host || '';

  let auth: string;
  if (config?.username && config.password) {
    auth = 'Basic ' + btoa(`${config.username}:${config.password}`);
  }

  let paused: Promise<void> | null = null;

  return async function (path, options) {
    const url = baseURL + path + toQueryString(options.query);
    const method = options.method ?? 'GET';
    const headers: Record<string, string> = {};
    const body = toBody(options);
    const signal = options.signal ?? null;

    const contentType = options.form ? undefined : 'application/json';
    if (contentType) headers['Content-Type'] = contentType;

    if (auth) headers['Authorization'] = auth;

    let attempts = 0;

    while (true) {
      if (paused) await withAbort(paused, signal);

      const response = await fetch(url, { method, headers, body, signal });

      // 409 - Daily Maintenance
      // 429 - Too Many Requests
      if (response.status === 409 || response.status === 429) {
        if (!paused) {
          const retryAfter = response.headers.get('Retry-After');
          const delay = retryAfter
            ? (+retryAfter || 0) * 1000
            : Math.min(1000 * 2 ** attempts++, 60_000) + Math.random() * 1000;

          paused = new Promise((resolve) => setTimeout(resolve, delay)).then(() => {
            paused = null;
          });
        }

        await response.blob().catch(() => { });
        continue;
      }

      return response;
    }
  };
}

export function toQueryString(object?: Record<string, any>): string {
  if (!object) {
    return '';
  }

  let qs = '';

  for (const [key, value] of Object.entries(object)) {
    let newValue = value;

    if (typeof value === 'boolean') {
      newValue = +value;
    } else if (Array.isArray(value)) {
      newValue = value.join(',');
    }

    qs += `&${key}=${encodeURIComponent(newValue)}`;
  }

  return qs;
}

function toBody(options: Pick<RequestOptions, 'form' | 'json'>): string | FormData | null {
  if (options.json) {
    return JSON.stringify(options.json);
  }

  if (options.form) {
    const body = new FormData();
    for (const [name, content, filename] of options.form) {
      const blob = content instanceof Blob ? content : new Blob([content]);
      body.append(name, blob, filename);
    }
    return body;
  }

  return null;
}

function withAbort<T>(promise: Promise<T>, signal?: AbortSignal | null): Promise<T> {
  if (!signal) return promise;

  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(signal.reason);
      return;
    }

    const onAbort = () => reject(signal.reason);
    signal.addEventListener('abort', onAbort, { once: true });

    const cleanup = () => signal.removeEventListener('abort', onAbort);

    promise.then(
      (value) => {
        cleanup();
        resolve(value);
      },
      (err) => {
        cleanup();
        reject(err);
      },
    );
  });
}
