import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaskInputCnpjDirective } from './../../shared/directives/mask-input-cnpj/mask-input-cnpj.directive';

import { ReplaceRandomStringPipe } from './../../shared/pipes/replace-random-string/replace-random-string.pipe';

const pocDemoModule = [MaskInputCnpjDirective, ReplaceRandomStringPipe];

import { PocDemoRoutingModule } from './poc-demo-routing.module';
import { PocDemoComponent } from './poc-demo.component';

@NgModule({
  declarations: [PocDemoComponent, pocDemoModule],
  imports: [CommonModule, PocDemoRoutingModule, ReactiveFormsModule],
})
export class PocDemoModule {}
