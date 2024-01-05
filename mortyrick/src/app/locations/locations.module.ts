import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LocationComponent } from './components/location/location.component';
import { LocationService } from './services/location.service';
import { LocationEffect } from './store/location.effects';
import { locationReducer } from './store/location.reducers';
import { RoutesEnum } from '../shared/types/routes.enum';
import { PaginationComponent } from '../shared/modules/pagination/components/pagination/pagination.component';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';

const routes = [
  {
    path: RoutesEnum.LOCATION,
    component: LocationComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('locations', locationReducer),
    EffectsModule.forFeature(LocationEffect),
  ],
  declarations: [LocationComponent],
  providers: [LocationService],
})
export class LocationsModule {}
