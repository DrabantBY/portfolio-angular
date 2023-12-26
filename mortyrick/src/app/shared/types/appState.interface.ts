import { CharacterStateInterface } from '../../characters/types/characterState.interface';
import { EpisodeStateInterface } from '../../episodes/types/episodeState.interface';
import { LocationStateInterface } from '../../locations/types/locationState.interface';

export interface AppStateInterface {
  characters: CharacterStateInterface;
  episodes: EpisodeStateInterface;
  locations: LocationStateInterface;
}
