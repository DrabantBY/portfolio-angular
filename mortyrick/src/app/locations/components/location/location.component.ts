import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationInterface } from '../../types/location.interface';
import { AppStateInterface } from '../../../shared/types/appState.interface';
import { locationAction } from '../../store/location.actions';
import { Store, select } from '@ngrx/store';
import {
  locationIsLoadingSelector,
  locationResultsSelector,
} from '../../store/location.selectors';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  location$: Observable<LocationInterface[] | null>;
  isLoading$: Observable<boolean>;

  constructor(private readonly store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.store.dispatch(locationAction());
    this.isLoading$ = this.store.pipe(select(locationIsLoadingSelector));
    this.location$ = this.store.pipe(select(locationResultsSelector));
  }
}
