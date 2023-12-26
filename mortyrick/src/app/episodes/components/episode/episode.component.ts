import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EpisodeInterface } from '../../types/episode.interface';
import { AppStateInterface } from '../../../shared/types/appState.interface';
import { episodeAction } from '../../store/episode.actions';
import {
  episodeIsLoadingSelector,
  episodeResultsSelector,
} from '../../store/episode.selectors';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss',
})
export class EpisodeComponent {
  isLoading$: Observable<boolean>;
  episode$: Observable<EpisodeInterface[] | null>;

  constructor(private readonly store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.store.dispatch(episodeAction());
    this.isLoading$ = this.store.pipe(select(episodeIsLoadingSelector));
    this.episode$ = this.store.pipe(select(episodeResultsSelector));
  }
}
