import { createReducer, on } from '@ngrx/store';
import { CharacterStateInterface } from '../types/characterState.interface';
import {
  characterAction,
  characterFailureAction,
  characterSuccessAction,
} from './character.actions';

const initialState: CharacterStateInterface = {
  results: null,
  isLoading: false,
  errorData: null,
};

export const characterReducer = createReducer(
  initialState,
  on(
    characterAction,
    (state): CharacterStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    characterSuccessAction,
    (state, action): CharacterStateInterface => ({
      ...state,
      isLoading: false,
      results: action.results,
    })
  ),
  on(characterFailureAction, (): CharacterStateInterface => initialState)
);
