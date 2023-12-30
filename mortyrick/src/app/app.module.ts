import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './shared/components/main/main.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppComponent } from './app.component';
import { CharactersModule } from './characters/characters.module';
import { EpisodesModule } from './episodes/episodes.module';
import { LocationsModule } from './locations/locations.module';
import { environment } from '../environments/environment.development';
import { ErrorModule } from './error/error.module';

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
    ErrorModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    environment.imports,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
