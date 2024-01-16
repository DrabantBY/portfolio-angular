import { Component, Input } from '@angular/core';
import { CharacterInterface } from '../../types/character.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent {
  @Input({ required: true }) characters: CharacterInterface[] | null;
}
