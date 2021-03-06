import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { TopBarComponent } from './top-bar.component';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
];

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, ...materialModules],
  exports: [TopBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopBarModule {}
