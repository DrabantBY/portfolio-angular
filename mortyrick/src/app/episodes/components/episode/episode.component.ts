import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeService } from '../../services/episode.service';
import { EpisodeInterface } from '../../types/episode.interface';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss',
})
export class EpisodeComponent {
  episode$: Observable<EpisodeInterface[]>;

  constructor(private readonly episodeService: EpisodeService) {}

  ngOnInit(): void {
    this.episode$ = this.episodeService.getEpisodes();
  }
}
