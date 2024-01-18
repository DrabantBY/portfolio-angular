import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CharacterComponent } from './components/character/character.component';

import { CharacterService } from './services/character.service';

import { characterReducer } from './store/character.reducers';
import { CharacterEffect } from './store/character.effects';

import { RoutesEnum } from '../shared/types/routes.enum';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes = [
  {
    path: RoutesEnum.CHARACTER,
    component: CharacterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('characters', characterReducer),
    EffectsModule.forFeature(CharacterEffect),
    PaginationModule,
    SpinnerComponent,
    MatCardModule,
    MatGridListModule,
  ],
  declarations: [CharacterComponent, CharacterListComponent],
  providers: [CharacterService],
})
export class CharactersModule {}
