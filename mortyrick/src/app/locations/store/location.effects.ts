import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  locationAction,
  locationFailureAction,
  locationSuccessAction,
} from './location.actions';
import { LocationService } from '../services/location.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { LocationResponseType } from '../types/locationResponse.type';

@Injectable()
export class LocationEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly locationService: LocationService
  ) {}

  locationEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(locationAction),
      switchMap(() =>
        this.locationService.getLocations().pipe(
          map(({ results, info }: LocationResponseType) =>
            locationSuccessAction({ results, info })
          ),
          catchError((error: HttpErrorResponse) =>
            of(locationFailureAction({ error }))
          )
        )
      )
    )
  );

  locationError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(locationFailureAction),
        switchMap(({ error }) => throwError(() => error))
      ),
    { dispatch: false }
  );
}
