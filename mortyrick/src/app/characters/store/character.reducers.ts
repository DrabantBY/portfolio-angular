import { createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

import {
  characterAction,
  characterFailureAction,
  characterSuccessAction,
} from './character.actions';

import { CharacterStateInterface } from '../types/characterState.interface';

const initialState: CharacterStateInterface = {
  isLoading: false,
  results: null,
  info: null,
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
      info: action.info,
    })
  ),
  on(
    characterFailureAction,
    (state): CharacterStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): CharacterStateInterface => initialState)
);
