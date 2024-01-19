import { Component, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input({ required: true }) options: string[];
  @Input({ required: true }) label: string;
  value = '';
  handler($event: MatSelectChange) {
    console.log($event);
    this.value = $event.value;
  }
}
