import { Suite } from "./Suite";

export interface Suites extends Record<string, unknown> {
  "offset": number,
  "limit": number,
  "size": number,
  "_links": {
    "next": string,
    "prev": unknown
  },
  "suites": Suite[]
}
