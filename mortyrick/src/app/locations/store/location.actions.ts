import { HttpErrorResponse } from '@angular/common/http';

import { createAction, props } from '@ngrx/store';

import { LocationInterface } from './../types/location.interface';
import { ResponseInfoInterface } from '../../shared/types/responseInfo.interface';

export enum LocationActionsEnum {
  LOCATION = '[Location] Location',
  LOCATION_SUCCESS = '[Location] Location success',
  LOCATION_FAILURE = '[Location] Location failure',
}

export const locationAction = createAction(LocationActionsEnum.LOCATION);

export const locationSuccessAction = createAction(
  LocationActionsEnum.LOCATION_SUCCESS,
  props<{ results: LocationInterface[]; info: ResponseInfoInterface }>()
);

export const locationFailureAction = createAction(
  LocationActionsEnum.LOCATION_FAILURE,
  props<{ error: HttpErrorResponse }>()
);
