import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CharacterResponseType } from '../types/characterResponse.type';
import { RoutesEnum } from '../../shared/types/routes.enum';
import { CharacterInterface } from '../types/character.interface';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class CharacterService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  getCharacters(): Observable<CharacterInterface[]> {
    const url = `${environment.baseURL}${this.router.url}`;
    return this.http
      .get<CharacterResponseType>(url)
      .pipe(
        map(
          (response: CharacterResponseType): CharacterInterface[] =>
            response.results
        )
      );
  }
}
