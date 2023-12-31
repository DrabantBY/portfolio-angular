import { EpisodeInterface } from './episode.interface';

export interface EpisodeStateInterface {
  isLoading: boolean;
  results: EpisodeInterface[] | null;
}
