import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ErrorComponent } from './components/error/error.component';

import { GlobalClientErrorService } from './services/global-client-error.service';
import { GlobalServerError } from './services/global-server-error.service';

const routes = [{ path: 'error', component: ErrorComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [ErrorComponent],
  providers: [
    { provide: ErrorHandler, useClass: GlobalClientErrorService },
    { provide: HTTP_INTERCEPTORS, useClass: GlobalServerError, multi: true },
  ],
})
export class ErrorModule {}
