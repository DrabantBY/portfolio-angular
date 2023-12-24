import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavMenuService {
  private readonly navMenuState$: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  toggleNavMenuState(): void {
    const newState = !this.navMenuState$.value;
    this.navMenuState$.next(newState);
  }

  get navMenuIsOpen$(): Observable<boolean> {
    return this.navMenuState$.asObservable();
  }
}
