import { Component, OnInit } from '@angular/core';
import { EpisodeInterface } from './types/episode.interface';
import { EpisodeService } from './services/episode.service';
import { NavigationEnum } from '../shared/types/navigation.enum';
import { HttpClientModule } from '@angular/common/http';

@Component({
  imports: [HttpClientModule],
  providers: [EpisodeService],
  selector: 'app-episodes',
  standalone: true,
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent implements OnInit {
  episodes: EpisodeInterface[];

  constructor(private readonly episodeService: EpisodeService) {}

  ngOnInit(): void {
    this.episodeService
      .getEpisodes(NavigationEnum.EPISODE)
      .subscribe((episodeResponse) => {
        this.episodes = episodeResponse.results;
      });
  }
}
