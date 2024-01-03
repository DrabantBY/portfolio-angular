import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { NavMenuService } from '../../../../services/nav-menu.service';
import { BreakpointService } from '../../../../services/breakpoint.service';

@Component({
  selector: 'app-main',
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
    this.navMenuService.toggleNavMenuState();
  }

  ngOnInit(): void {
    this.drawerIsOpen$ = this.navMenuService.navMenuIsOpen$;
    this.isSmallSize$ = this.breakpointService.isBreakpointSmall$;
  }
}
