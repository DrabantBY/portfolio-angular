import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';

import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationService } from './services/pagination.service';

@NgModule({
  imports: [CommonModule, MatPaginatorModule],
  declarations: [PaginationComponent],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginationService }],
  exports: [PaginationComponent],
})
export class PaginationModule {}
