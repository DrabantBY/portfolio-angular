import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import {
  characterAction,
  characterFailureAction,
  characterSuccessAction,
} from './character.actions';

import { CharacterService } from '../services/character.service';
import { CharacterResponseType } from '../types/characterResponse.type';

@Injectable()
export class CharacterEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly characterService: CharacterService
  ) {}

  characterEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(characterAction),
      switchMap(() =>
        this.characterService.getCharacters().pipe(
          map(({ results, info }: CharacterResponseType) =>
            characterSuccessAction({ results, info })
          ),
          catchError((error: HttpErrorResponse) =>
            of(characterFailureAction({ error }))
          )
        )
      )
    )
  );

  characterError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(characterFailureAction),
        switchMap(({ error }) => throwError(() => error))
      ),
    { dispatch: false }
  );
}
