import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Observable } from 'rxjs';
import { CharacterInterface } from '../../types/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  constructor(
    private readonly characterService: CharacterService
  ) // private readonly store: Store<AppStateInterface>
  {}

  character$: Observable<CharacterInterface[]>;
  // isLoading$: Observable<boolean>;

  // setIsLoading(): void {
  //   this.store.dispatch(characterAction());
  // }

  ngOnInit(): void {
    this.character$ = this.characterService.getCharacters();
    // this.isLoading$ = this.store.pipe(select(characterIsLoadingSelector));
  }
}
