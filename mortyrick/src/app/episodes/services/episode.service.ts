import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { EpisodeResponseType } from '../types/episodeResponse.type';
import { environment } from '../../../environments/environment';

@Injectable()
export class EpisodeService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  getEpisodes(): Observable<EpisodeResponseType> {
    const url = `${environment.baseURL}${this.router.url}`;
    return this.http.get<EpisodeResponseType>(url);
  }
}
