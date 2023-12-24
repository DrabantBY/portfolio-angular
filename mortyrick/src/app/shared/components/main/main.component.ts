import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavMenuService } from '../../services/nav-menu.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  imports: [RouterOutlet, MatSidenavModule, AsyncPipe, NavMenuComponent],
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  drawerIsOpen$: Observable<boolean>;

  constructor(private readonly navMenuService: NavMenuService) {}

  closeDrawer(): void {
    this.navMenuService.toggleNavMenuIsOpen();
  }

  ngOnInit(): void {
    this.drawerIsOpen$ = this.navMenuService.navMenuIsOpen$;
  }
}
