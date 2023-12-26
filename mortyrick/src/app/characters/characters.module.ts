import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { RoutesEnum } from '../shared/types/routes.enum';
import { CharacterComponent } from './components/character/character.component';
import { CharacterService } from './services/character.service';

const routes = [
  {
    path: RoutesEnum.CHARACTER,
    component: CharacterComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CharacterComponent],
  providers: [CharacterService],
})
export class CharactersModule {}
