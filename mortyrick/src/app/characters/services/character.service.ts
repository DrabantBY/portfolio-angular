import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoutesEnum } from '../../shared/types/routes.enum';
import { Observable, map } from 'rxjs';
import { CharacterResponseType } from '../types/characterResponse.type';
import { environment } from '../../../environments/environment';
import { CharacterInterface } from '../types/character.interface';

@Injectable()
export class CharacterService {
  constructor(private readonly http: HttpClient) {}

  getCharacters(): Observable<CharacterInterface[]> {
    const url = `${environment.baseURL}/${RoutesEnum.CHARACTER}`;
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
