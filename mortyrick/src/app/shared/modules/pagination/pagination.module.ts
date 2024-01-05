import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [CommonModule, MatPaginatorModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
})
export class PaginationModule {}
