import { Routes } from '@angular/router';
import { EpisodesComponent } from './episodes.component';
import { RoutesEnum } from '../shared/types/routes.enum';

export const EPISODE_ROUTES: Routes = [
  {
    path: RoutesEnum.EPISODE,
    component: EpisodesComponent,
  },
];
