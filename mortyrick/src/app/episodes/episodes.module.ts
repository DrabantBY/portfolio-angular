import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EpisodeComponent } from './components/episode/episode.component';
import { RoutesEnum } from '../shared/types/routes.enum';
import { EpisodeService } from './services/episode.service';
import { episodeReducer } from './store/episode.reducers';
import { episodeEffect } from './store/episode.effects';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';

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
  ],
  declarations: [EpisodeComponent],
  providers: [EpisodeService],
})
export class EpisodesModule {}
