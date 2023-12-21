import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './services/location.service';
import { LocationInterface } from './types/location.interface';
import { NavigationEnum } from '../shared/types/navigation.enum';

@Component({
  imports: [HttpClientModule],
  providers: [LocationService],
  selector: 'app-locations',
  standalone: true,
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent implements OnInit {
  locations: LocationInterface[];

  constructor(private readonly locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService
      .getLocations(NavigationEnum.LOCATION)
      .subscribe((locationResponse) => {
        this.locations = locationResponse.results;
      });
  }
}
