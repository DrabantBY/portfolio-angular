import { Component, Input, OnInit } from '@angular/core';
import { ResponseInfoInterface } from '../../../../types/responseInfo.interface';
import { NavigationExtras, Router, UrlSegment } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  constructor(private readonly router: Router) {}

  @Input({ required: true }) info: ResponseInfoInterface | null;
  @Input({ required: true }) currentPageIndex: number;
  @Input({ required: true }) isLoading: boolean | null;

  currentRoute: string;

  navigateToPage(event: PageEvent): void {
    const navigationExtras: NavigationExtras = {
      queryParams: { page: event.pageIndex + 1 },
    };

    this.router.navigate([this.currentRoute], navigationExtras);
  }

  ngOnInit(): void {
    const currentUrl = this.router.url;
    const urlTree = this.router.parseUrl(currentUrl);
    this.currentRoute = urlTree.root.children['primary'].segments[0].path;
  }
}
