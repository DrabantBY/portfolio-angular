import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  characterAction,
  characterFailureAction,
  characterSuccessAction,
} from './character.actions';
import { CharacterService } from '../services/character.service';
import { CharacterInterface } from './../types/character.interface';

@Injectable()
export class CharacterEffect {
  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}

  character$ = createEffect(() =>
    this.actions$.pipe(
      ofType(characterAction),
      switchMap(() =>
        this.characterService.getCharacters().pipe(
          map((results: CharacterInterface[]) =>
            characterSuccessAction({ results })
          ),
          catchError(() => of(characterFailureAction()))
        )
      )
    )
  );
}