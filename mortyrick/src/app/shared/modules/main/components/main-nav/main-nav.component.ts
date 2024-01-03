import { Component } from '@angular/core';
import { RoutesEnum } from '../../../../types/routes.enum';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
})
export class MainNavComponent {
  links: string[] = Object.values(RoutesEnum);
}
