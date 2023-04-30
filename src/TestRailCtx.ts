export type TestRailCtx = {
  readonly baseURL?: string;
  readonly username?: string;
  readonly password?: string;
  readonly signal?: AbortSignal;
  readonly implementations?: {
    readonly AbortController?: any
    readonly Blob?: any;
    readonly fetch?: any;
    readonly FormData?: any;
  };
};
