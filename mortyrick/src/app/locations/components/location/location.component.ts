import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import {
  locationInfoSelector,
  locationIsLoadingSelector,
  locationResultsSelector,
} from '../../store/location.selectors';
import { locationAction } from '../../store/location.actions';

import { LocationInterface } from '../../types/location.interface';
import { ResponseInfoInterface } from '../../../shared/types/responseInfo.interface';
import { AppStateInterface } from '../../../shared/types/appState.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent implements OnInit, OnDestroy {
  constructor(
    private readonly store: Store<AppStateInterface>,
    private readonly route: ActivatedRoute
  ) {}

  isLoading$: Observable<boolean>;
  location$: Observable<LocationInterface[] | null>;
  info$: Observable<ResponseInfoInterface | null>;

  queryParamsSubscription: Subscription;
  currentPageIndex: number;

  fetchData() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params) => {
        this.currentPageIndex = params['page'];
        this.store.dispatch(locationAction());
      }
    );
  }

  selectData() {
    this.isLoading$ = this.store.pipe(select(locationIsLoadingSelector));
    this.location$ = this.store.pipe(select(locationResultsSelector));
    this.info$ = this.store.pipe(select(locationInfoSelector));
  }

  ngOnInit(): void {
    this.fetchData();
    this.selectData();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
