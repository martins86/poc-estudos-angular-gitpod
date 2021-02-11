import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';

import { BottomBarComponent } from './bottom-bar.component';

@NgModule({
  declarations: [BottomBarComponent],
  imports: [CommonModule, MatDividerModule],
  exports: [BottomBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BottomBarModule {}
