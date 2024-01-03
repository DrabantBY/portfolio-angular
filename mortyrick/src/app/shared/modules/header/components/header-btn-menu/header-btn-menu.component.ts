import { Component } from '@angular/core';
import { NavMenuService } from '../../../../services/nav-menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-btn-menu',
  templateUrl: './header-btn-menu.component.html',
  styleUrl: './header-btn-menu.component.scss',
})
export class HeaderBtnMenuComponent {
  constructor(private readonly navMenuService: NavMenuService) {}

  btnIsClosed$: Observable<boolean>;

  toggleBtnIsClosed() {
    this.navMenuService.toggleNavMenuState();
  }

  ngOnInit(): void {
    this.btnIsClosed$ = this.navMenuService.navMenuIsOpen$;
  }
}
