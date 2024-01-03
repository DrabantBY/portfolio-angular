import { Component } from '@angular/core';
import { RoutesEnum } from '../../../../types/routes.enum';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent {
  links: string[] = Object.values(RoutesEnum);
}
