import { ResponseInfoInterface } from './responseInfo.interface';

export type ResponseBodyType<T> = {
  info: ResponseInfoInterface;
  results: T[];
};
