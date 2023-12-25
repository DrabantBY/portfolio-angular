import { Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';
import { RoutesEnum } from '../shared/types/routes.enum';

export const LOCATION_ROUTES: Routes = [
  {
    path: RoutesEnum.LOCATION,
    component: LocationsComponent,
  },
];
