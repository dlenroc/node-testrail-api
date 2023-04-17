export type TestRailCtx = {
  readonly baseURL?: string;
  readonly username?: string;
  readonly password?: string;
  readonly signal?: AbortSignal;
};
