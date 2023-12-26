import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from './components/episode/episode.component';
import { RouterModule } from '@angular/router';
import { RoutesEnum } from '../shared/types/routes.enum';
import { EpisodeService } from './services/episode.service';

const routes = [
  {
    path: RoutesEnum.EPISODE,
    component: EpisodeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [EpisodeComponent],
  providers: [EpisodeService],
})
export class EpisodesModule {}
