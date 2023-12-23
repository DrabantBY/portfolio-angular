import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './shared/components/main/main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  imports: [CommonModule, HeaderComponent, MainComponent, FooterComponent],

  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
