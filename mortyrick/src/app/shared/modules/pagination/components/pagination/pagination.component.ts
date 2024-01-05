import { Component, Input } from '@angular/core';
import { ResponseInfoInterface } from '../../../../types/responseInfo.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input({ required: true }) info: ResponseInfoInterface | null;
  handlePage(event: any): void {
    console.log(event);
  }
}
