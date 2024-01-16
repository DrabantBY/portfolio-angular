import { Component, Input } from '@angular/core';
import { EpisodeInterface } from '../../types/episode.interface';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss',
})
export class EpisodeListComponent {
  @Input({ required: true }) episodes: EpisodeInterface[] | null;
}
