import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterInterface } from '../../types/character.interface';
import { AppStateInterface } from '../../../shared/types/appState.interface';
import { characterAction } from '../../store/character.actions';
import {
  characterIsLoadingSelector,
  characterResultsSelector,
} from '../../store/character.selectors';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  constructor(private readonly store: Store<AppStateInterface>) {}

  isLoading$: Observable<boolean>;
  character$: Observable<CharacterInterface[] | null>;

  ngOnInit(): void {
    this.store.dispatch(characterAction());
    this.isLoading$ = this.store.pipe(select(characterIsLoadingSelector));
    this.character$ = this.store.pipe(select(characterResultsSelector));
  }
}
