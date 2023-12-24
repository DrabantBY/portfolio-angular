import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavMenuService } from '../../services/nav-menu.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { BreakpointService } from '../../services/breakpoint.service';

@Component({
  imports: [RouterOutlet, MatSidenavModule, AsyncPipe, NavMenuComponent],
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  drawerIsOpen$: Observable<boolean>;
  isSmallSize$: Observable<boolean>;

  constructor(
    private readonly navMenuService: NavMenuService,
    private readonly breakpointService: BreakpointService
  ) {}

  closeDrawer(): void {
    this.navMenuService.toggleNavMenuIsOpen();
  }

  ngOnInit(): void {
    this.drawerIsOpen$ = this.navMenuService.navMenuIsOpen$;
    this.isSmallSize$ = this.breakpointService.isBreakpointSmall$;
  }
}
