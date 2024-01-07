import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CharacterComponent } from './components/character/character.component';

import { CharacterService } from './services/character.service';

import { characterReducer } from './store/character.reducers';
import { CharacterEffect } from './store/character.effects';

import { RoutesEnum } from '../shared/types/routes.enum';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';

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
  ],
  declarations: [CharacterComponent],
  providers: [CharacterService],
})
export class CharactersModule {}
