import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
