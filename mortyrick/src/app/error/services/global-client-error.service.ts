import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';

@Injectable()
export class GlobalClientErrorService implements ErrorHandler {
  constructor(private readonly router: Router, private readonly zone: NgZone) {}

  handleError(error: Error | HttpErrorResponse): void {
    const navigationExtras: NavigationExtras = {
      state: undefined,
    };

    if (error instanceof HttpErrorResponse) {
      navigationExtras.state = {
        statusCode: error.status,
        statusText: error.error?.error ?? error.statusText,
      };
    } else {
      navigationExtras.state = {
        statusCode: error.name,
        statusText: error.message,
      };
    }

    this.zone.run(() => {
      this.router.navigate(['error'], navigationExtras);
    });
  }
}
