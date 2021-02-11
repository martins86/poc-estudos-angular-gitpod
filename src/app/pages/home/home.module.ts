import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatDividerModule],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
