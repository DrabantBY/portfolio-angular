import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const environment = {
  imports: [StoreDevtoolsModule.instrument({ maxAge: 25, trace: true })],
  production: false,
  baseURL: 'https://rickandmortyapi.com/api',
};
