import { HttpErrorResponse } from '@angular/common/http';
import { EpisodeInterface } from '../types/episode.interface';
import { createAction, props } from '@ngrx/store';

export enum EpisodeActionsEnum {
  EPISODE = '[Episode] Episode',
  EPISODE_SUCCESS = '[Episode] Episode success',
  EPISODE_FAILURE = '[Episode] Episode failure',
}

export const episodeAction = createAction(EpisodeActionsEnum.EPISODE);

export const episodeSuccessAction = createAction(
  EpisodeActionsEnum.EPISODE_SUCCESS,
  props<{ results: EpisodeInterface[] }>()
);

export const episodeFailureAction = createAction(
  EpisodeActionsEnum.EPISODE_FAILURE,
  props<{ error: HttpErrorResponse }>()
);
