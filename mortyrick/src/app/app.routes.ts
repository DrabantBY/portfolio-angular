import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationsComponent } from './locations/locations.component';

export const routes: Routes = [
  { path: 'character', component: CharactersComponent },
  { path: 'episode', component: EpisodesComponent },
  { path: 'location', component: LocationsComponent },
];
