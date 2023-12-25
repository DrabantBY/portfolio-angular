import { Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { RoutesEnum } from '../shared/types/routes.enum';

export const CHARACTER_ROUTES: Routes = [
  {
    path: RoutesEnum.CHARACTER,
    component: CharactersComponent,
  },
];
