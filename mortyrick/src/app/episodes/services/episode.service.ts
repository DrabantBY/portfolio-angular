import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { EpisodeResponseType } from '../types/episodeResponse.type';
import { EpisodeInterface } from '../types/episode.interface';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class EpisodeService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  getEpisodes(): Observable<EpisodeInterface[]> {
    const url = `${environment.baseURL}${this.router.url}`;
    return this.http
      .get<EpisodeResponseType>(url)
      .pipe(
        map(
          (response: EpisodeResponseType): EpisodeInterface[] =>
            response.results
        )
      );
  }
}
