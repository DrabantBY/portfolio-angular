import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationInterface } from '../../types/location.interface';
import { AppStateInterface } from '../../../shared/types/appState.interface';
import { locationAction } from '../../store/location.actions';
import { Store, select } from '@ngrx/store';
import {
  locationInfoSelector,
  locationIsLoadingSelector,
  locationResultsSelector,
} from '../../store/location.selectors';
import { ResponseInfoInterface } from '../../../shared/types/responseInfo.interface';
import {
  PRIMARY_OUTLET,
  Router,
  UrlSegment,
  UrlSegmentGroup,
  UrlTree,
} from '@angular/router';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  location$: Observable<LocationInterface[] | null>;
  isLoading$: Observable<boolean>;
  info$: Observable<ResponseInfoInterface | null>;

  constructor(private readonly store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.store.dispatch(locationAction());
    this.isLoading$ = this.store.pipe(select(locationIsLoadingSelector));
    this.location$ = this.store.pipe(select(locationResultsSelector));
    this.info$ = this.store.pipe(select(locationInfoSelector));
  }
}
