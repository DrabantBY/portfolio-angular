import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavMenuService } from '../../services/nav-menu.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [MatButtonModule, MatIconModule, AsyncPipe],
  selector: 'app-btn-menu',
  standalone: true,
  templateUrl: './btn-menu.component.html',
  styleUrl: './btn-menu.component.scss',
})
export class BtnMenuComponent implements OnInit {
  btnIsClosed$: Observable<boolean>;

  constructor(private readonly navMenuService: NavMenuService) {}

  toggleBtnIsClosed() {
    this.navMenuService.toggleNavMenuState();
  }

  ngOnInit(): void {
    this.btnIsClosed$ = this.navMenuService.navMenuIsOpen$;
  }
}
