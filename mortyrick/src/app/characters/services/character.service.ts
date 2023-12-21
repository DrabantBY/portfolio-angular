import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnum } from '../../shared/types/navigation.enum';
import { Observable } from 'rxjs';
import { CharacterResponseType } from '../types/characterResponse.type';

@Injectable()
export class CharacterService {
  constructor(private readonly http: HttpClient) {}

  getCharacters(link: NavigationEnum): Observable<CharacterResponseType> {
    return this.http.get<CharacterResponseType>(
      `https://rickandmortyapi.com/api/${link}`
    );
  }
}
