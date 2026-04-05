export type AddDataset = Record<string, unknown> & {
  id?: string | undefined;
  name?: string | undefined;
  variables?: AddDataset.Variable[] | undefined;
};

export namespace AddDataset {
  export type Variable = Record<string, unknown> & {
    id?: number | undefined;
    name?: string | undefined;
    variable?: string | undefined;
  };
}
