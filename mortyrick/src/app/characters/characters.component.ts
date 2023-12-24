import { CharacterService } from './services/character.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CharacterInterface } from './types/character.interface';

@Component({
  imports: [HttpClientModule, AsyncPipe],
  providers: [CharacterService],
  selector: 'app-characters',
  standalone: true,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  constructor(private readonly characterService: CharacterService) {}

  character$: Observable<CharacterInterface[]>;

  ngOnInit(): void {
    this.character$ = this.characterService.getCharacters();
  }
}
