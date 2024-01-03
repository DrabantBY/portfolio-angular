import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderBtnMenuComponent } from './components/header-btn-menu/header-btn-menu.component';
import { HeaderBtnThemeComponent } from './components/header-btn-theme/header-btn-theme.component';

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    HeaderComponent,
    HeaderNavComponent,
    HeaderLogoComponent,
    HeaderBtnMenuComponent,
    HeaderBtnThemeComponent,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
