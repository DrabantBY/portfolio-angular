import { CharacterInterface } from './character.interface';

export interface CharacterStateInterface {
  results: CharacterInterface[] | null;
  isLoading: boolean;
  errorData: null;
}
