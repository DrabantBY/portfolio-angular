import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './components/location/location.component';
import { RoutesEnum } from '../shared/types/routes.enum';
import { RouterModule } from '@angular/router';
import { LocationService } from './services/location.service';

const routes = [
  {
    path: RoutesEnum.LOCATION,
    component: LocationComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LocationComponent],
  providers: [LocationService],
})
export class LocationsModule {}
