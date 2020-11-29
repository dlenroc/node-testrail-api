import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import fs from 'fs';
import { mock as tsMock } from 'intermock';
import nock, { RequestBodyMatcher } from 'nock';
import querystring from 'querystring';
import TestRail from '..';

chai.use(chaiAsPromised).should();

export const OK = 200;
export const BAD_REQUEST = 400;
export const TO_MANY_REQUEST = 429;
export const CONFLICT = 409;
export const prefix = '/index.php?/api/v2/';
export const host = 'https://dlenroc.testrail.com';
export const username = 'Username';
export const password = 'Password/Token';
export const api = new TestRail({ host, username, password });

export function qs(obj: Record<any, any>) {
  return querystring.stringify(obj);
}

export function on(path: string, requestBody?: RequestBodyMatcher | any) {
  const options = {
    reqheaders: {
      'Content-Type': path.startsWith('add_attachment')
        ? /multipart\/form-data/
        : 'application/json',
    },
  };

  const scope = nock(host, options);

  let interceptor = path.startsWith('get')
    ? scope.get(prefix + path, requestBody)
    : scope.post(prefix + path, requestBody);

  interceptor = interceptor.basicAuth({
    user: username,
    pass: password,
  });

  return interceptor;
}

export async function jsonFor(name: string, ...names: string[]): Promise<any> {
  const interfaces = [name, ...names];

  const files: [[string, string]] = [
    ['TestRail.d.ts', fs.readFileSync('dist/TestRail.d.ts', { encoding: 'utf-8' })],
  ];

  const result: Record<string, undefined> = await tsMock({ interfaces, files }) as any;

  const notFoundInterfaces = interfaces.filter((key) => !result[key]);
  if (notFoundInterfaces.length) {
    throw new Error(`Could not generate mock for ${notFoundInterfaces}`);
  }

  if (interfaces.length === 1) {
    return result[interfaces[0]];
  }

  return result;
}
