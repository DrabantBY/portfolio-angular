import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnum } from '../../shared/types/navigation.enum';
import { Observable, map } from 'rxjs';
import { LocationResponseType } from '../types/locationResponse.type';
import { environment } from '../../../environments/environment';
import { LocationInterface } from '../types/location.interface';

@Injectable()
export class LocationService {
  constructor(private readonly http: HttpClient) {}

  getLocations(): Observable<LocationInterface[]> {
    const url = `${environment.baseURL}/${NavigationEnum.LOCATION}`;
    return this.http
      .get<LocationResponseType>(url)
      .pipe(
        map(
          (response: LocationResponseType): LocationInterface[] =>
            response.results
        )
      );
  }
}
