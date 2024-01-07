import { HttpErrorResponse } from '@angular/common/http';

import { createAction, props } from '@ngrx/store';

import { ResponseInfoInterface } from '../../shared/types/responseInfo.interface';

import { EpisodeInterface } from '../types/episode.interface';

export enum EpisodeActionsEnum {
  EPISODE = '[Episode] Episode',
  EPISODE_SUCCESS = '[Episode] Episode success',
  EPISODE_FAILURE = '[Episode] Episode failure',
}

export const episodeAction = createAction(EpisodeActionsEnum.EPISODE);

export const episodeSuccessAction = createAction(
  EpisodeActionsEnum.EPISODE_SUCCESS,
  props<{ results: EpisodeInterface[]; info: ResponseInfoInterface }>()
);

export const episodeFailureAction = createAction(
  EpisodeActionsEnum.EPISODE_FAILURE,
  props<{ error: HttpErrorResponse }>()
);
