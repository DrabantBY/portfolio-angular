import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { LogoComponent } from '../logo/logo.component';
import { BtnMenuComponent } from '../btn-menu/btn-menu.component';
import { BreakpointService } from '../../services/breakpoint.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [
    NavMenuComponent,
    MatToolbarModule,
    LogoComponent,
    BtnMenuComponent,
    AsyncPipe,
  ],
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isSmallSize$: Observable<boolean>;
  links: string[] = ['character', 'episode', 'location'];

  constructor(private readonly breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.isSmallSize$ = this.breakpointService.isBreakpointSmall$;
  }
}
