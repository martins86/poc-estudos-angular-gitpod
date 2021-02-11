import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftBarComponent } from './left-bar.component';

@NgModule({
  declarations: [LeftBarComponent],
  imports: [CommonModule],
  exports: [LeftBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeftBarModule {}
