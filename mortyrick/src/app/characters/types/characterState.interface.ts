import { CharacterInterface } from './character.interface';

export interface CharacterStateInterface {
  isLoading: boolean;
  results: CharacterInterface[] | null;
}
