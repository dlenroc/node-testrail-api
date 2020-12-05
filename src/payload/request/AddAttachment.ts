import type { Readable } from 'stream';

export type AddAttachment =
  | Blob
  | Readable
  | {
      name: string;
      value: string | Blob | Readable;
    };
