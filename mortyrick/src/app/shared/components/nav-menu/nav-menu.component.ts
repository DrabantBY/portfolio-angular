import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { UpperCasePipe } from '@angular/common';

@Component({
  imports: [
    RouterLink,
    RouterLinkActive,
    MatTabsModule,
    MatListModule,
    UpperCasePipe,
  ],
  selector: 'app-nav-menu',
  standalone: true,
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  links: string[] = ['character', 'episode', 'location'];
}
