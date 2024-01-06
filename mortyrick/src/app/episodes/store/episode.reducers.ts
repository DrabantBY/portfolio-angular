import { createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { EpisodeStateInterface } from '../types/episodeState.interface';
import {
  episodeAction,
  episodeFailureAction,
  episodeSuccessAction,
} from './episode.actions';

const initialState: EpisodeStateInterface = {
  results: null,
  isLoading: false,
  info: null,
};

export const episodeReducer = createReducer(
  initialState,
  on(
    episodeAction,
    (state): EpisodeStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    episodeSuccessAction,
    (state, action): EpisodeStateInterface => ({
      ...state,
      isLoading: false,
      results: action.results,
      info: action.info,
    })
  ),
  on(
    episodeFailureAction,
    (state): EpisodeStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): EpisodeStateInterface => initialState)
);
