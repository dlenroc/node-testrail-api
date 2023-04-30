import type { TestRailCtx } from '../TestRailCtx.js';
import { TestRailException } from '../TestRailException';

declare var FormData: any;
declare type FormData = any;

export async function _api<T>(ctx: TestRailCtx, method: string, path: string, { query, json, form }: { query?: object | undefined; json?: object | undefined; form?: object } = {}): Promise<T> {
  const headers: any = {};
  const url = ctx.baseURL + path + qs(query);

  // Add authentication header
  if (ctx.username && ctx.password) {
    headers.Authorization = `Basic ${base64(`${ctx.username}:${ctx.password}`)}`;
  }

  // TestRail requires 'Content-Type: application/json' for all requests except those containing form data
  if (!form) {
    headers['Content-Type'] = 'application/json';
  }

  // Determine body & request type
  let body;

  if (json) {
    body = JSON.stringify(json);
  } else if (form) {
    // @ts-ignore - intentionally throws "ReferrerError" if "FormData" is not available
    body = new (ctx.implementations?.FormData || FormData)();
    for (const [key, value] of Object.entries(form)) {
      if (value.name && value.value) {
        appendToFormData(ctx, body, key, value.value, value.name);
      } else {
        appendToFormData(ctx, body, key, value);
      }
    }
  }

  while (true) {
    // @ts-ignore - intentionally throws "ReferrerError" if "fetch" is not available
    const response = await (ctx.implementations?.fetch || fetch)(url, { method, body, headers, signal: ctx.signal });

    // Retry on 429 Too Many Requests
    if (response.status === 429) {
      const retryAfter = parseInt(response.headers.get('Retry-After') || '1') * 1000;
      await sleep(retryAfter, ctx.signal);
      continue;
    }

    // Retry on 409 Conflict - Daily Maintenance
    if (response.status === 409) {
      await sleep(10 * 1000, ctx.signal);
      continue;
    }

    // Content-Type based response
    const result = response.headers.get('Content-Type')?.includes('json')
      ? await response.json().catch(() => ({}))
      : await response.blob();

    if (response.ok) {
      return result;
    } else {
      throw new TestRailException(result.error || `No additional error message received: ${response.status} ${response.statusText}`);
    }
  }
}

function sleep(timeout: number, signal?: AbortSignal): Promise<void> {
  if (signal?.aborted) {
    return Promise.reject(signal.reason);
  }

  return new Promise((resolve, reject) => {
    const timerId = setTimeout(
      () => {
        resolve();
        signal?.removeEventListener('abort', onAbort);
      },
      timeout
    );

    signal?.addEventListener('abort', onAbort, { once: true });

    function onAbort() {
      clearTimeout(timerId);
      reject(signal?.reason);
    }
  });
}

function base64(string: string) {
  if (typeof btoa !== 'undefined') {
    return btoa(string);
  } else {
    return Buffer.from(string).toString('base64');
  }
}

function appendToFormData(ctx: TestRailCtx, formData: FormData, name: string, value: string | Blob, filename?: string) {
  try {
    formData.append(name, value, filename);
  } catch {
    // @ts-ignore - intentionally throws "ReferrerError" if "Blob" is not available
    const BlobConstructor = ctx.implementations?.Blob || Blob;
    const blob = value instanceof BlobConstructor ? value : new BlobConstructor([value]);
    formData.append(name, blob, filename);
  }
}

export function qs(object?: Record<string, any>): string {
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
