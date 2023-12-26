import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationInterface } from '../../types/location.interface';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
location$: Observable<LocationInterface[]>;

  constructor(private readonly locationService: LocationService) {}

  ngOnInit(): void {
    this.location$ = this.locationService.getLocations();
  }
}
