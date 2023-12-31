import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { GlobalClientErrorService } from './services/global-client-error.service';
import { GlobalServerError } from './services/global-server-error.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const routes = [{ path: 'error', component: ErrorComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ErrorComponent],
  providers: [
    { provide: ErrorHandler, useClass: GlobalClientErrorService },
    { provide: HTTP_INTERCEPTORS, useClass: GlobalServerError, multi: true },
  ],
})
export class ErrorModule {}
