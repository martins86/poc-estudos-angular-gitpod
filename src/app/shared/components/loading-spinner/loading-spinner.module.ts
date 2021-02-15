import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoadingSpinnerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoadingSpinnerModule {}
