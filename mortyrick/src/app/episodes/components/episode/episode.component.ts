import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import {
  episodeInfoSelector,
  episodeIsLoadingSelector,
  episodeResultsSelector,
} from '../../store/episode.selectors';
import { episodeAction } from '../../store/episode.actions';

import { AppStateInterface } from '../../../shared/types/appState.interface';
import { ResponseInfoInterface } from '../../../shared/types/responseInfo.interface';
import { EpisodeInterface } from '../../types/episode.interface';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss',
})
export class EpisodeComponent implements OnInit, OnDestroy {
  constructor(
    private readonly store: Store<AppStateInterface>,
    private readonly route: ActivatedRoute
  ) {}

  isLoading$: Observable<boolean>;
  episode$: Observable<EpisodeInterface[] | null>;
  info$: Observable<ResponseInfoInterface | null>;

  queryParamsSubscription: Subscription;
  currentPageIndex: number;

  fetchData() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params) => {
        this.currentPageIndex = params['page'];
        this.store.dispatch(episodeAction());
      }
    );
  }

  selectData() {
    this.isLoading$ = this.store.pipe(select(episodeIsLoadingSelector));
    this.episode$ = this.store.pipe(select(episodeResultsSelector));
    this.info$ = this.store.pipe(select(episodeInfoSelector));
  }

  ngOnInit(): void {
    this.fetchData();
    this.selectData();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
