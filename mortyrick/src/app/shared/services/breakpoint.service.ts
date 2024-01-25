import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.isBreakpointSmall$ = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map((state) => state.matches));

    this.gridCol$ = this.breakpointObserver
      .observe(Object.values(Breakpoints))
      .pipe(
        map(({ breakpoints }) => {
          switch (true) {
            case breakpoints[Breakpoints.XSmall]:
              return 1;
            case breakpoints[Breakpoints.Small]:
              return 2;
            case breakpoints[Breakpoints.Medium]:
              return 3;
            case breakpoints[Breakpoints.Large]:
              return 4;
            case breakpoints[Breakpoints.XLarge]:
              return 5;
            default:
              return 3;
          }
        })
      );
  }

  isBreakpointSmall$: Observable<boolean>;
  gridCol$: Observable<number>;
}
