import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PaginationService extends MatPaginatorIntl {
  override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ): string => {
    return `PAGE: ${page + 1} of ${Math.ceil(length / pageSize) || 'unknown'}`;
  };
}
