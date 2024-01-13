import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorInterface } from '../types/error.interface';

@Injectable()
export class GlobalClientErrorService implements ErrorHandler {
  constructor(private readonly router: Router, private readonly zone: NgZone) {}

  handleError(error: Error | HttpErrorResponse): void {
    let state: ErrorInterface;

    if (error instanceof HttpErrorResponse) {
      state = {
        name: `${error.name} ${error.status}`,
        message: error.error?.error ?? error.statusText ?? error.message,
      };
    } else {
      state = {
        name: error.name,
        message: error.message,
      };
    }

    this.zone.run(() => {
      this.router.navigate(['error'], { state });
    });
  }
}
