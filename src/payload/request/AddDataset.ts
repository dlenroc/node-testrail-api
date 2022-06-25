export interface AddDataset extends Record<string, unknown> {
  id?: string;
  name?: number;
  variables?: AddDataset.Variable[];
}

export namespace AddDataset {
  export interface Variable extends Record<string, unknown> {
    id?: number;
    name?: string;
    variable?: string;
  }
}
