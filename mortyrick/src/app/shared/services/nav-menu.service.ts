import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavMenuService {
  private readonly navMenuIsOpen: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  navMenuIsOpen$: Observable<boolean> = this.navMenuIsOpen.asObservable();

  toggleNavMenuIsOpen(): void {
    const newState = !this.navMenuIsOpen.value;
    this.navMenuIsOpen.next(newState);
  }
}
