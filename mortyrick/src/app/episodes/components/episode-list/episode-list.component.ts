import { BreakpointService } from './../../../shared/services/breakpoint.service';
import { Component, Input, OnInit } from '@angular/core';
import { EpisodeInterface } from '../../types/episode.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss',
})
export class EpisodeListComponent implements OnInit {
  constructor(private readonly breakpointService: BreakpointService) {}

  @Input({ required: true }) episodes: EpisodeInterface[] | null;

  col$: Observable<number>;

  ngOnInit(): void {
    this.col$ = this.breakpointService.gridCol$;
  }
}
