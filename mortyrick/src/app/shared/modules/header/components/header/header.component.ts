import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointService } from '../../../../services/breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private readonly breakpointService: BreakpointService) {}

  isSmallSize$: Observable<boolean>;

  links: string[] = ['character', 'episode', 'location'];

  ngOnInit(): void {
    this.isSmallSize$ = this.breakpointService.isBreakpointSmall$;
  }
}
