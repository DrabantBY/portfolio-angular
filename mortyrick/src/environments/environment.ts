import { provideStoreDevtools } from '@ngrx/store-devtools';

export const environment = {
  production: false,
  providers: [provideStoreDevtools({ maxAge: 15 })],
  baseURL: 'https://rickandmortyapi.com/api',
};
