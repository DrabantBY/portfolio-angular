import { Component, Input } from '@angular/core';
import { ResponseInfoInterface } from '../../../../types/responseInfo.interface';
import { NavigationExtras, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  constructor(private readonly router: Router) {}

  @Input({ required: true }) info: ResponseInfoInterface | null;

  onNavigateToPage(event: PageEvent): void {
    const navigationExtras: NavigationExtras = {
      queryParams: { page: event.pageIndex + 1 },
    };

    this.router.navigate(['/location'], navigationExtras);
  }
}
