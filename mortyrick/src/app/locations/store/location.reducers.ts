import { createReducer, on } from '@ngrx/store';
import { LocationStateInterface } from '../types/locationState.interface';
import { locationAction, locationSuccessAction } from './location.actions';

const initialState: LocationStateInterface = {
  results: null,
  isLoading: false,
  errorData: null,
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
  )
);
