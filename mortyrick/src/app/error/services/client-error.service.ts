import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ClientErrorService implements ErrorHandler {
  constructor(
    private readonly router: Router,
    private readonly ngZone: NgZone
  ) {}

  handleError(e: Error): void {
    const error = { statusCode: 1000, statusText: e.message ?? 'asdfasdfasdf' };

    this.ngZone.run(() => {
      this.router.navigateByUrl('error', {
        state: error,
      });
    });
  }
}
