import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../shared/types/appState.interface';
import { LocationStateInterface } from '../types/locationState.interface';
import { LocationInterface } from '../types/location.interface';

export const locationSelector = (
  state: AppStateInterface
): LocationStateInterface => state.locations;

export const locationIsLoadingSelector = createSelector(
  locationSelector,
  (state: LocationStateInterface): boolean => state.isLoading
);

export const locationResultsSelector = createSelector(
  locationSelector,
  (state: LocationStateInterface): LocationInterface[] | null => state.results
);
