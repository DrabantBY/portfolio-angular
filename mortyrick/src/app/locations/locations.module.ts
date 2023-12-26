import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './components/location/location.component';
import { RoutesEnum } from '../shared/types/routes.enum';
import { RouterModule } from '@angular/router';
import { LocationService } from './services/location.service';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from './store/location.reducers';
import { EffectsModule } from '@ngrx/effects';
import { LocationEffect } from './store/location.effects';

const routes = [
  {
    path: RoutesEnum.LOCATION,
    component: LocationComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('locations', locationReducer),
    EffectsModule.forFeature(LocationEffect),
  ],
  declarations: [LocationComponent],
  providers: [LocationService],
})
export class LocationsModule {}
