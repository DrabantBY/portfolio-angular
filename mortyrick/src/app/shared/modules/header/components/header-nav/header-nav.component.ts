import { Component } from '@angular/core';
import { RoutesEnum } from '../../../../types/routes.enum';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent {
  activeMatchOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    paths: 'exact',
    fragment: 'ignored',
  };

  links: string[] = Object.values(RoutesEnum);
}
