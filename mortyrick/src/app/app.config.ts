import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from './../environments/environment';
import { provideState, provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
import { characterReducer } from './characters/store/character.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore(),
    provideState({ name: 'character', reducer: characterReducer }),
    // provideEffects(),
    environment.providers,
  ],
};
