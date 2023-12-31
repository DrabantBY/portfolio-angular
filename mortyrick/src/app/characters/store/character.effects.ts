import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import {
  characterAction,
  characterFailureAction,
  characterSuccessAction,
} from './character.actions';
import { CharacterInterface } from './../types/character.interface';
import { CharacterService } from '../services/character.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

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
          map((results: CharacterInterface[]) =>
            characterSuccessAction({ results })
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
        mergeMap(({ error }) => throwError(() => error))
      ),
    { dispatch: false }
  );
}
