import { Component, Input } from '@angular/core';
import { LocationInterface } from '../../types/location.interface';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss',
})
export class LocationListComponent {
  @Input({ required: true }) locations: LocationInterface[] | null;
}
