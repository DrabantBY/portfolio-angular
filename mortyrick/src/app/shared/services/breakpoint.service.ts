import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.#breakpointState$ = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map((state) => state.matches));
  }

  #breakpointState$: Observable<boolean>;

  get isBreakpointSmall$(): Observable<boolean> {
    return this.#breakpointState$;
  }
}
