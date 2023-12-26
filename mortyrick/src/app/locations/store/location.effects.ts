import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  locationAction,
  locationFailureAction,
  locationSuccessAction,
} from './location.actions';
import { LocationInterface } from './../types/location.interface';
import { LocationService } from '../services/location.service';

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
          map((results: LocationInterface[]) =>
            locationSuccessAction({ results })
          ),
          catchError(() => of(locationFailureAction()))
        )
      )
    )
  );
}
