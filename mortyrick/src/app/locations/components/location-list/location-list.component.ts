import { BreakpointService } from './../../../shared/services/breakpoint.service';
import { Component, Input, OnInit } from '@angular/core';
import { LocationInterface } from '../../types/location.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss',
})
export class LocationListComponent implements OnInit {
  constructor(private readonly breakpointService: BreakpointService) {}

  @Input({ required: true }) locations: LocationInterface[] | null;
  col$: Observable<number>;

  ngOnInit(): void {
    this.col$ = this.breakpointService.gridCol$;
  }
}
