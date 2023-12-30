import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import {
  characterAction,
  characterFailureAction,
  characterSuccessAction,
} from './character.actions';
import { CharacterInterface } from './../types/character.interface';
import { CharacterService } from '../services/character.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class CharacterEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly characterService: CharacterService,
    private readonly router: Router
  ) {}

  characterEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(characterAction),
      switchMap(() =>
        this.characterService.getCharacters().pipe(
          map((results: CharacterInterface[]) =>
            characterSuccessAction({ results })
          ),
          catchError((httpErrorResponse: HttpErrorResponse) => {
            const error = {
              statusCode: httpErrorResponse.status,
              statusText:
                httpErrorResponse.error.error ?? httpErrorResponse.statusText,
            };

            return of(characterFailureAction({ error }));
          })
        )
      )
    )
  );

  characterError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(characterFailureAction),
        tap((error) => {
          this.router.navigateByUrl('error', { state: error });
        })
      ),
    { dispatch: false }
  );
}
