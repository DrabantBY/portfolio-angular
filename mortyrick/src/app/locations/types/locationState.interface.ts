import { LocationInterface } from './location.interface';

export interface LocationStateInterface {
  results: LocationInterface[] | null;
  isLoading: boolean;
  errorData: null;
}
