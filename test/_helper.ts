import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import fs from 'fs';
import { globSync } from 'glob';
import { mock as tsMock } from 'intermock';
import nock, { type RequestBodyMatcher } from 'nock';
import TestRail from '..';

export { qs } from '../src/internal/request';

chai.use(chaiAsPromised).should();

const tsFiles: [string, string][] = globSync('./src/**/*.ts')
  .map((file) => [file, fs.readFileSync(file, { encoding: 'utf-8' })]);

tsFiles.push(['Record.ts', `type Record<K extends keyof any, T> = { [P in K]: T }`]);

export const OK = 200;
export const BAD_REQUEST = 400;
export const TO_MANY_REQUEST = 429;
export const CONFLICT = 409;
export const prefix = '/index.php?/api/v2/';
export const host = 'https://dlenroc.testrail.com';
export const username = 'Username';
export const password = 'Password/Token';
export const api = new TestRail({ host, username, password });

export function on(path: string, requestBody?: RequestBodyMatcher | any) {
  const options = {
    reqheaders: {
      'Content-Type': path.match('add_(attachment|bdd)')
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

export function jsonFor(name: string, ...names: string[]): any {
  const interfaces = [name, ...names];
  const result: Record<string, undefined> = tsMock({
    interfaces,
    files: tsFiles,
    isFixedMode: true,
  }) as any;

  const notFoundInterfaces = interfaces.filter((key) => !result[key]);
  if (notFoundInterfaces.length) {
    throw new Error(`Could not generate mock for ${notFoundInterfaces}`);
  }

  if (interfaces.length === 1) {
    return result[interfaces[0]!];
  }

  return result;
}
