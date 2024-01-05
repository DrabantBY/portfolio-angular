import { ResponseInfoInterface } from '../../shared/types/responseInfo.interface';
import { LocationInterface } from './location.interface';

export interface LocationStateInterface {
  isLoading: boolean;
  results: LocationInterface[] | null;
  info: ResponseInfoInterface | null;
}
