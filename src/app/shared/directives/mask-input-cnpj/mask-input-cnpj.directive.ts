import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

/*
 * ex:
 * module: declarations, exports
 * html: <input type="text" formControlName="cnpj" appMaskInputCnpj maxlength="17" />
 * result: '00.000.000/0000-00'
 */
@Directive({
  selector: '[formControlName][appMaskInputCnpj]',
})
export class MaskInputCnpjDirective {
  constructor(public ngControl: NgControl) {}

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event): void {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event): void {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event, backspace): void {
    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 2) {
      newVal = newVal.replace(/^(\d{0,2})/, '$1');
    } else if (newVal.length <= 5) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,3})/, '$1.$2');
    } else if (newVal.length <= 8) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})/, '$1.$2.$3');
    } else if (newVal.length <= 11) {
      newVal = newVal.replace(
        /^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,3})/,
        '$1.$2.$3/$4'
      );
    } else if (newVal.length <= 13) {
      newVal = newVal.replace(
        /^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,1})/,
        '$1.$2.$3/$4-$5'
      );
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}
