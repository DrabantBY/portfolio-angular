import { createReducer, on } from '@ngrx/store';
import { EpisodeStateInterface } from '../types/episodeState.interface';
import { episodeAction, episodeSuccessAction } from './episode.actions';

const initialState: EpisodeStateInterface = {
  results: null,
  isLoading: false,
  errorData: null,
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
  )
);
