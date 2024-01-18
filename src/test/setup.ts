import '@testing-library/jest-dom';
import nock from 'nock';
import { beforeEach, afterEach } from 'vitest';
import nodeFetch from 'node-fetch';

const realFetch = fetch;

beforeEach(() => {
  // @ts-expect-error below
  global.fetch = nodeFetch;
  if (!nock.isActive()) nock.activate();
  nock.disableNetConnect();
});

afterEach(() => {
  nock.cleanAll();
  nock.enableNetConnect();
  nock.restore();
  global.fetch = realFetch;
});
