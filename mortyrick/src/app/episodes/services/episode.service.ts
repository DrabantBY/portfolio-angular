import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnum } from '../../shared/types/navigation.enum';
import { Observable } from 'rxjs';
import { EpisodeResponseType } from '../types/episodeResponse.type';

@Injectable()
export class EpisodeService {
  constructor(private readonly http: HttpClient) {}

  getEpisodes(link: NavigationEnum): Observable<EpisodeResponseType> {
    return this.http.get<EpisodeResponseType>(
      `https://rickandmortyapi.com/api/${link}`
    );
  }
}
