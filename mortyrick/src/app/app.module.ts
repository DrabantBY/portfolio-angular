import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './shared/modules/header/header.module';
import { MainModule } from './shared/modules/main/main.module';
import { FooterModule } from './shared/modules/footer/footer.module';
import { PaginationModule } from './shared/modules/pagination/pagination.module';

import { CharactersModule } from './characters/characters.module';
import { EpisodesModule } from './episodes/episodes.module';
import { LocationsModule } from './locations/locations.module';
import { ErrorModule } from './error/error.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.development';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CharactersModule,
    EpisodesModule,
    LocationsModule,
    HeaderModule,
    MainModule,
    FooterModule,
    ErrorModule,
    PaginationModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    environment.imports,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
