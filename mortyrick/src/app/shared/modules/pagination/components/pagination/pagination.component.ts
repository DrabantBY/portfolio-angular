import { Component, Input } from '@angular/core';
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
  #length: number;

  @Input({ required: true }) currentPageIndex: number;
  @Input({ required: true }) isLoading: boolean | null;
  @Input({ required: true })
  set length(info: ResponseInfoInterface | null) {
    this.#length = info ? info.count : this.#length;
  }
  get length(): number {
    return this.#length;
  }

  onPageNavigate(event: PageEvent): void {
    this.router.navigate([], {
      queryParams: { page: event.pageIndex + 1 },
    });
  }
}
