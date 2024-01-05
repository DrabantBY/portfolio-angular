import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { LocationResponseType } from '../types/locationResponse.type';
import { environment } from '../../../environments/environment';

@Injectable()
export class LocationService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  getLocations(): Observable<LocationResponseType> {
    const url = `${environment.baseURL}${this.router.url}`;
    return this.http.get<LocationResponseType>(url);
  }
}
