import { Component } from '@angular/core';
import { RoutesEnum } from '../../../../types/routes.enum';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
})
export class MainNavComponent {
  activeMatchOptions: IsActiveMatchOptions = {
    matrixParams: 'ignored',
    queryParams: 'ignored',
    paths: 'exact',
    fragment: 'ignored',
  };

  links: string[] = Object.values(RoutesEnum);
}
