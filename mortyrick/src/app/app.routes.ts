import { Routes } from '@angular/router';
import { CHARACTER_ROUTES } from './characters/characters.routes';
import { EPISODE_ROUTES } from './episodes/episodes.routes';
import { LOCATION_ROUTES } from './locations/locations.routes';

export const routes: Routes = [
  ...CHARACTER_ROUTES,
  ...EPISODE_ROUTES,
  ...LOCATION_ROUTES,
];
