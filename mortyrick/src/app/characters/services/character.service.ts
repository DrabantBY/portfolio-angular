import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CharacterResponseType } from '../types/characterResponse.type';
import { environment } from '../../../environments/environment';

@Injectable()
export class CharacterService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  getCharacters(): Observable<CharacterResponseType> {
    const url = `${environment.baseURL}${this.router.url}`;
    return this.http.get<CharacterResponseType>(url);
  }
}
