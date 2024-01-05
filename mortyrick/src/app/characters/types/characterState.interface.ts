import { ResponseInfoInterface } from '../../shared/types/responseInfo.interface';
import { CharacterInterface } from './character.interface';

export interface CharacterStateInterface {
  isLoading: boolean;
  results: CharacterInterface[] | null;
  info: ResponseInfoInterface | null;
}
