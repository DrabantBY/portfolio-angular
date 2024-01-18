import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { episodeReducer } from './store/episode.reducers';
import { episodeEffect } from './store/episode.effects';

import { EpisodeService } from './services/episode.service';

import { EpisodeComponent } from './components/episode/episode.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';

import { RoutesEnum } from '../shared/types/routes.enum';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';

const routes = [
  {
    path: RoutesEnum.EPISODE,
    component: EpisodeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('episodes', episodeReducer),
    EffectsModule.forFeature(episodeEffect),
    PaginationModule,
    SpinnerComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
  ],
  declarations: [EpisodeComponent, EpisodeListComponent],
  providers: [EpisodeService],
})
export class EpisodesModule {}
