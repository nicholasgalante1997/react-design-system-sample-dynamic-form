import axios, { AxiosRequestConfig } from 'axios';

const localInstance = axios.create({
  headers: {
    'x-spectrum-write-key': process.env.WRITE_KEY,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Content-Encoding': 'utf-8',
  },
});

type CouldFail<T> = {
  ok: boolean;
  error?: Error | string;
  data?: T;
};

export const get = async function <T>(
  path: string,
  options: AxiosRequestConfig
): Promise<CouldFail<T>> {
  const { data, status } = await localInstance.get<T>(path, options);
  let error = undefined;
  if (status > 400) {
    error = new Error('TransientException', { cause: 'Check Log Output' });
  }
  if (status > 500) {
    error = new Error('ServerException', { cause: 'Check Server Log Output' });
  }
  return {
    ok: status === 200,
    data,
    error,
  };
};

export const post = async function <T, B>(
  path: string,
  body: B,
  options: AxiosRequestConfig
): Promise<CouldFail<T>> {
  const { data, status } = await localInstance.post<T>(path, body, options);
  let error = undefined;
  if (status > 400) {
    error = new Error('TransientException', { cause: 'Check Log Output' });
  }
  if (status > 500) {
    error = new Error('ServerException', { cause: 'Check Server Log Output' });
  }
  return {
    ok: status === 201,
    data,
    error,
  };
};

export const patch = async function <T, B>(
  path: string,
  body: B,
  options: AxiosRequestConfig
): Promise<CouldFail<T>> {
  const { data, status } = await localInstance.patch<T>(path, body, options);
  let error = undefined;
  if (status > 400) {
    error = new Error('TransientException', { cause: 'Check Log Output' });
  }
  if (status > 500) {
    error = new Error('ServerException', { cause: 'Check Server Log Output' });
  }
  return {
    ok: status === 201,
    data,
    error,
  };
};

export const del = async function <T, B>(
  path: string,
  body: B,
  options: AxiosRequestConfig
): Promise<CouldFail<T>> {
  const { data, status } = await localInstance.delete<T>(path, options);
  let error = undefined;
  if (status > 400) {
    error = new Error('TransientException', { cause: 'Check Log Output' });
  }
  if (status > 500) {
    error = new Error('ServerException', { cause: 'Check Server Log Output' });
  }
  return {
    ok: status === 201,
    data,
    error,
  };
};
