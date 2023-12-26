import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from './store/character.reducers';

import { RouterModule } from '@angular/router';
import { RoutesEnum } from '../shared/types/routes.enum';
import { CharacterComponent } from './components/character/character.component';
import { CharacterService } from './services/character.service';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffect } from './store/character.effects';

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
  ],
  declarations: [CharacterComponent],
  providers: [CharacterService],
})
export class CharactersModule {}
