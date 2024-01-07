import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import {
  characterInfoSelector,
  characterIsLoadingSelector,
  characterResultsSelector,
} from '../../store/character.selectors';
import { characterAction } from '../../store/character.actions';

import { CharacterInterface } from '../../types/character.interface';
import { AppStateInterface } from '../../../shared/types/appState.interface';
import { ResponseInfoInterface } from '../../../shared/types/responseInfo.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent implements OnInit, OnDestroy {
  constructor(
    private readonly store: Store<AppStateInterface>,
    private readonly route: ActivatedRoute
  ) {}

  isLoading$: Observable<boolean>;
  character$: Observable<CharacterInterface[] | null>;
  info$: Observable<ResponseInfoInterface | null>;

  queryParamsSubscription: Subscription;
  currentPageIndex: number;

  fetchData() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params) => {
        this.currentPageIndex = params['page'];
        this.store.dispatch(characterAction());
      }
    );
  }

  selectData() {
    this.isLoading$ = this.store.pipe(select(characterIsLoadingSelector));
    this.character$ = this.store.pipe(select(characterResultsSelector));
    this.info$ = this.store.pipe(select(characterInfoSelector));
  }

  ngOnInit(): void {
    this.fetchData();
    this.selectData();
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
  }
}
