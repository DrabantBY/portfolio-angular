import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './services/location.service';
import { LocationInterface } from './types/location.interface';
import { NavigationEnum } from '../shared/types/navigation.enum';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [HttpClientModule, AsyncPipe],
  providers: [LocationService],
  selector: 'app-locations',
  standalone: true,
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent implements OnInit {
  location$: Observable<LocationInterface[]>;

  constructor(private readonly locationService: LocationService) {}

  ngOnInit(): void {
    this.location$ = this.locationService.getLocations();
  }
}
