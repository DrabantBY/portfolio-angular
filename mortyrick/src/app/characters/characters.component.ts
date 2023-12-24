import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { characterIsLoadingSelector } from './store/character.selectors';
import { characterAction } from './store/character.actions';
import { AppStateInterface } from '../shared/types/appState.interface';
import { NavigationEnum } from './../shared/types/navigation.enum';
import { CharacterService } from './services/character.service';
import { CharacterInterface } from './types/character.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [HttpClientModule, AsyncPipe],
  providers: [CharacterService],
  selector: 'app-characters',
  standalone: true,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  characters: CharacterInterface[];

  isLoading$: Observable<boolean>;

  constructor(
    private readonly characterService: CharacterService,
    private readonly store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.characterService
      .getCharacters(NavigationEnum.CHARACTER)
      .subscribe((results) => {
        this.characters = results;
      });

    // this.store.dispatch(characterAction({ link: NavigationEnum.CHARACTER }));

    // this.isLoading$ = this.store.pipe(select(characterIsLoadingSelector));
    // console.log(this.isLoading$);
  }
}
