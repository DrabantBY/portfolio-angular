import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  episodeAction,
  episodeFailureAction,
  episodeSuccessAction,
} from './episode.actions';

import { EpisodeService } from '../services/episode.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { EpisodeResponseType } from '../types/episodeResponse.type';

@Injectable()
export class episodeEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly episodeService: EpisodeService
  ) {}

  episodeEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(episodeAction),
      switchMap(() =>
        this.episodeService.getEpisodes().pipe(
          map(({ results, info }: EpisodeResponseType) =>
            episodeSuccessAction({ results, info })
          ),
          catchError((error: HttpErrorResponse) =>
            of(episodeFailureAction({ error }))
          )
        )
      )
    )
  );

  episodeError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(episodeFailureAction),
        switchMap(({ error }) => throwError(() => error))
      ),
    { dispatch: false }
  );
}
