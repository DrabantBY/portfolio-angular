import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MainComponent } from './components/main/main.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatListModule,
  ],
  declarations: [MainComponent, MainNavComponent],
  exports: [MainComponent],
})
export class MainModule {}
