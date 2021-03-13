import { Pipe, PipeTransform } from '@angular/core';

/*
 * ex:
 * module: declarations, exports
 * component: stringText = '000.000.000-00';
 * html: <p> {{ stringText | replaceRandomString:'*' }}</p>
 * result: '000**00*00*-00'
 */

@Pipe({
  name: 'replaceRandomString',
})
export class ReplaceRandomStringPipe implements PipeTransform {
  transform(value: string, replaceValue: string): any {
    return value
      .split('')
      .map((char) =>
        Math.random() > 0.3 && char !== '.' && char !== '-' && char !== '/'
          ? `${replaceValue}`
          : char
      )
      .join('');
  }
}
