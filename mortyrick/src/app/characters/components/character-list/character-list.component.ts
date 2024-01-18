import { BreakpointService } from './../../../shared/services/breakpoint.service';
import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from '../../types/character.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent implements OnInit {
  constructor(private readonly breakpointService: BreakpointService) {}

  @Input({ required: true }) characters: CharacterInterface[] | null;

  col$: Observable<number>;

  ngOnInit(): void {
    this.col$ = this.breakpointService.gridCol$;
  }
}
