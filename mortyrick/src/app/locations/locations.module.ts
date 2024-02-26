import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LocationComponent } from './components/location/location.component';

import { LocationService } from './services/location.service';

import { LocationEffect } from './store/location.effects';
import { locationReducer } from './store/location.reducers';

import { PaginationModule } from '../shared/modules/pagination/pagination.module';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { LocationListComponent } from './components/location-list/location-list.component';

const routes = [
  {
    path: '',
    component: LocationComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('locations', locationReducer),
    EffectsModule.forFeature(LocationEffect),
    PaginationModule,
    SpinnerComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
  ],
  declarations: [LocationComponent, LocationListComponent],
  providers: [LocationService],
})
export class LocationsModule {}
