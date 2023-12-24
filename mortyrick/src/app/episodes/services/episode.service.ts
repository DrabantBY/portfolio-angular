import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnum } from '../../shared/types/navigation.enum';
import { Observable, map } from 'rxjs';
import { EpisodeResponseType } from '../types/episodeResponse.type';
import { EpisodeInterface } from '../types/episode.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class EpisodeService {
  constructor(private readonly http: HttpClient) {}

  getEpisodes(): Observable<EpisodeInterface[]> {
    const url = `${environment.baseURL}/${NavigationEnum.EPISODE}`;
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
