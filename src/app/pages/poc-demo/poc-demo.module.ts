import {
  CUSTOM_ELEMENTS_SCHEMA,
  DEFAULT_CURRENCY_CODE,
  NgModule,
} from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

import { MatIconModule } from '@angular/material/icon';

import { MaskInputCnpjDirective } from './../../shared/directives/mask-input-cnpj/mask-input-cnpj.directive';

import { ReplaceRandomStringPipe } from './../../shared/pipes/replace-random-string/replace-random-string.pipe';

const pocDemoModule = [MaskInputCnpjDirective, ReplaceRandomStringPipe];

import { PocDemoRoutingModule } from './poc-demo-routing.module';
import { PocDemoComponent } from './poc-demo.component';

@NgModule({
  declarations: [PocDemoComponent, pocDemoModule],
  imports: [
    CommonModule,
    HttpClientModule,
    PocDemoRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [PocDemoComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PocDemoModule {}
