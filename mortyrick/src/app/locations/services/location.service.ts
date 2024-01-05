import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { LocationResponseType } from '../types/locationResponse.type';
import { environment } from '../../../environments/environment';
import { LocationInterface } from '../types/location.interface';

import { Router } from '@angular/router';

@Injectable()
export class LocationService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  getLocations(): Observable<LocationInterface[]> {
    const url = `${environment.baseURL}${this.router.url}`;
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
