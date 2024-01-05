import { ResponseInfoInterface } from '../../shared/types/responseInfo.interface';
import { EpisodeInterface } from './episode.interface';

export interface EpisodeStateInterface {
  isLoading: boolean;
  results: EpisodeInterface[] | null;
  info: ResponseInfoInterface | null;
}
