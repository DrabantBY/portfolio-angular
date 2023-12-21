import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnum } from '../../shared/types/navigation.enum';
import { Observable } from 'rxjs';
import { LocationResponseType } from '../types/locationResponse.type';

@Injectable()
export class LocationService {
  constructor(private readonly http: HttpClient) {}

  getLocations(link: NavigationEnum): Observable<LocationResponseType> {
    return this.http.get<LocationResponseType>(
      `https://rickandmortyapi.com/api/${link}`
    );
  }
}
