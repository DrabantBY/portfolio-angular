import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoComponent } from '../logo/logo.component';
import { BtnMenuComponent } from '../btn-menu/btn-menu.component';

@Component({
  imports: [
    NavMenuComponent,
    MatToolbarModule,
    LogoComponent,
    BtnMenuComponent,
  ],
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: string[] = ['character', 'episode', 'location'];
}
