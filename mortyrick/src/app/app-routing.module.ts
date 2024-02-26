import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from './shared/types/routes.enum';

const routes: Routes = [
  {
    path: RoutesEnum.CHARACTER,
    loadChildren: () =>
      import('./characters/characters.module').then(
        (module) => module.CharactersModule
      ),
  },
  {
    path: RoutesEnum.EPISODE,
    loadChildren: () =>
      import('./episodes/episodes.module').then(
        (module) => module.EpisodesModule
      ),
  },
  {
    path: RoutesEnum.LOCATION,
    loadChildren: () =>
      import('./locations/locations.module').then(
        (module) => module.LocationsModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
