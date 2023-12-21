import { ResponseInfoType } from './responseInfo.type';

export type ResponseBodyType<T> = {
  info: ResponseInfoType;
  results: T[];
};
