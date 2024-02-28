import { Component, Input, OnInit } from '@angular/core';
import { ResponseInfoInterface } from '../../../../types/responseInfo.interface';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  constructor(private readonly router: Router) {}

  @Input({ required: true }) info: ResponseInfoInterface | null;
  @Input({ required: true }) currentPageIndex: number;
  @Input({ required: true }) isLoading: boolean | null;

  onPageNavigate(event: PageEvent): void {
    this.router.navigate([], {
      queryParams: { page: event.pageIndex + 1 },
    });
  }
}
