import { LocationInterface } from './location.interface';

export interface LocationStateInterface {
  isLoading: boolean;
  results: LocationInterface[] | null;
}
