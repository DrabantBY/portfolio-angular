import { createSelector } from '@ngrx/store';
import { EpisodeStateInterface } from '../types/episodeState.interface';
import { AppStateInterface } from '../../shared/types/appState.interface';
import { EpisodeInterface } from '../../episodes/types/episode.interface';
import { ResponseInfoInterface } from '../../shared/types/responseInfo.interface';

export const episodeSelector = (
  state: AppStateInterface
): EpisodeStateInterface => state.episodes;

export const episodeIsLoadingSelector = createSelector(
  episodeSelector,
  (state: EpisodeStateInterface): boolean => state.isLoading
);

export const episodeResultsSelector = createSelector(
  episodeSelector,
  (state: EpisodeStateInterface): EpisodeInterface[] | null => state.results
);

export const episodeInfoSelector = createSelector(
  episodeSelector,
  (state: EpisodeStateInterface): ResponseInfoInterface | null => state.info
);
