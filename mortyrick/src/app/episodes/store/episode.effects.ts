import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  episodeAction,
  episodeFailureAction,
  episodeSuccessAction,
} from './episode.actions';
import { EpisodeInterface } from './../types/episode.interface';
import { EpisodeService } from '../services/episode.service';

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
          map((results: EpisodeInterface[]) =>
            episodeSuccessAction({ results })
          ),
          catchError(() => of(episodeFailureAction()))
        )
      )
    )
  );
}
