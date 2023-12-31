import { createAction, props } from '@ngrx/store';
import { LocationInterface } from './../types/location.interface';
import { HttpErrorResponse } from '@angular/common/http';

export enum LocationActionsEnum {
  LOCATION = '[Location] Location',
  LOCATION_SUCCESS = '[Location] Location success',
  LOCATION_FAILURE = '[Location] Location failure',
}

export const locationAction = createAction(LocationActionsEnum.LOCATION);

export const locationSuccessAction = createAction(
  LocationActionsEnum.LOCATION_SUCCESS,
  props<{ results: LocationInterface[] }>()
);

export const locationFailureAction = createAction(
  LocationActionsEnum.LOCATION_FAILURE,
  props<{ error: HttpErrorResponse }>()
);
