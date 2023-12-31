import { createReducer, on } from '@ngrx/store';
import { EpisodeStateInterface } from '../types/episodeState.interface';
import {
  episodeAction,
  episodeFailureAction,
  episodeSuccessAction,
} from './episode.actions';

const initialState: EpisodeStateInterface = {
  results: null,
  isLoading: false,
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
    })
  ),
  on(
    episodeFailureAction,
    (state): EpisodeStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);
