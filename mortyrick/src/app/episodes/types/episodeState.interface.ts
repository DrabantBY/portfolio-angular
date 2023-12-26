import { EpisodeInterface } from './episode.interface';

export interface EpisodeStateInterface {
  results: EpisodeInterface[] | null;
  isLoading: boolean;
  errorData: null;
}
