import { createSelector } from '@ngrx/store';
import { CharacterStateInterface } from '../types/characterState.interface';
import { AppStateInterface } from './../../shared/types/appState.interface';
import { CharacterInterface } from '../types/character.interface';

export const characterSelector = (
  state: AppStateInterface
): CharacterStateInterface => state.characters;

export const characterIsLoadingSelector = createSelector(
  characterSelector,
  (state: CharacterStateInterface): boolean => state.isLoading
);

export const characterResultsSelector = createSelector(
  characterSelector,
  (state: CharacterStateInterface): CharacterInterface[] | null => state.results
);
