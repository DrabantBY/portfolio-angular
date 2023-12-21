import { NavigationEnum } from './../shared/types/navigation.enum';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';
import { CharacterInterface } from './types/character.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  imports: [HttpClientModule],
  providers: [CharacterService],
  selector: 'app-characters',
  standalone: true,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  characters: CharacterInterface[];
  constructor(private readonly characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService
      .getCharacters(NavigationEnum.CHARACTER)
      .subscribe((characterResponse) => {
        this.characters = characterResponse.results;
      });
  }
}
