import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './shared/components/main/main.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppComponent } from './app.component';
import { CharactersModule } from './characters/characters.module';
import { EpisodesModule } from './episodes/episodes.module';
import { LocationsModule } from './locations/locations.module';
import { HttpClientModule } from '@angular/common/http';

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
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
