import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PaginationService extends MatPaginatorIntl {
  override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ): string => {
    return `${page + 1}/${Math.ceil(length / pageSize)}`;
  };
}
