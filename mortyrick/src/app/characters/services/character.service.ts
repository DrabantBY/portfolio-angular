import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnum } from '../../shared/types/navigation.enum';
import { Observable, map } from 'rxjs';
import { CharacterResponseType } from '../types/characterResponse.type';
import { environment } from '../../../environments/environment';
import { CharacterInterface } from '../types/character.interface';

@Injectable()
export class CharacterService {
  constructor(private readonly http: HttpClient) {}

  getCharacters(link: NavigationEnum): Observable<CharacterInterface[]> {
    return this.http
      .get<CharacterResponseType>(`${environment.baseURL}/${link}`)
      .pipe(
        map(
          (response: CharacterResponseType): CharacterInterface[] =>
            response.results
        )
      );
  }
}
