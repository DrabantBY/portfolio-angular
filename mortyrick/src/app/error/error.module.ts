import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';

import { RouterModule } from '@angular/router';
import { ClientErrorService } from './services/client-error.service';

const routes = [{ path: 'error', component: ErrorComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ErrorComponent],
  // providers: [{ provide: ErrorHandler, useClass: ClientErrorService }],
})
export class ErrorModule {}
