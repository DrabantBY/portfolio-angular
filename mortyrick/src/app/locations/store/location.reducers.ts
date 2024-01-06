import { createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { LocationStateInterface } from '../types/locationState.interface';
import {
  locationAction,
  locationFailureAction,
  locationSuccessAction,
} from './location.actions';

const initialState: LocationStateInterface = {
  results: null,
  isLoading: false,
  info: null,
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
      info: action.info,
    })
  ),
  on(
    locationFailureAction,
    (state): LocationStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): LocationStateInterface => initialState)
);
