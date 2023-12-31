import { createReducer, on } from '@ngrx/store';
import { LocationStateInterface } from '../types/locationState.interface';
import {
  locationAction,
  locationFailureAction,
  locationSuccessAction,
} from './location.actions';

const initialState: LocationStateInterface = {
  results: null,
  isLoading: false,
};

export const locationReducer = createReducer(
  initialState,
  on(
    locationAction,
    (state): LocationStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    locationSuccessAction,
    (state, action): LocationStateInterface => ({
      ...state,
      isLoading: false,
      results: action.results,
    })
  ),
  on(
    locationFailureAction,
    (state): LocationStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);
