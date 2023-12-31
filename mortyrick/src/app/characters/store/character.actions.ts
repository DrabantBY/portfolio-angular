import { HttpErrorResponse } from '@angular/common/http';
import { CharacterInterface } from './../types/character.interface';
import { createAction, props } from '@ngrx/store';

export enum CharacterActionsEnum {
  CHARACTER = '[Character] Character',
  CHARACTER_SUCCESS = '[Character] Character success',
  CHARACTER_FAILURE = '[Character] Character failure',
}

export const characterAction = createAction(CharacterActionsEnum.CHARACTER);

export const characterSuccessAction = createAction(
  CharacterActionsEnum.CHARACTER_SUCCESS,
  props<{ results: CharacterInterface[] }>()
);

export const characterFailureAction = createAction(
  CharacterActionsEnum.CHARACTER_FAILURE,
  props<{ error: HttpErrorResponse }>()
);
