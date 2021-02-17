import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const materialModules = [MatIconModule, MatDividerModule, MatListModule];

import { LeftBarComponent } from './left-bar.component';

@NgModule({
  declarations: [LeftBarComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, ...materialModules],
  exports: [LeftBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeftBarModule {}
