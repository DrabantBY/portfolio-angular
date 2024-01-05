import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../shared/types/appState.interface';
import { LocationStateInterface } from '../types/locationState.interface';
import { LocationInterface } from '../types/location.interface';
import { ResponseInfoInterface } from '../../shared/types/responseInfo.interface';

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

export const locationInfoSelector = createSelector(
  locationSelector,
  (state: LocationStateInterface): ResponseInfoInterface | null => state.info
);
