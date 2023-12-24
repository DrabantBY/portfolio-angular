import { Component, OnInit } from '@angular/core';
import { EpisodeInterface } from './types/episode.interface';
import { EpisodeService } from './services/episode.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [HttpClientModule, AsyncPipe],
  providers: [EpisodeService],
  selector: 'app-episodes',
  standalone: true,
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent implements OnInit {
  episode$: Observable<EpisodeInterface[]>;

  constructor(private readonly episodeService: EpisodeService) {}

  ngOnInit(): void {
    this.episode$ = this.episodeService.getEpisodes();
  }
}
