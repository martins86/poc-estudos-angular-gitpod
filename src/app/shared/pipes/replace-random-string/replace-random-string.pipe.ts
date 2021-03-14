import { Pipe, PipeTransform } from '@angular/core';

/*
 * ex:
 * module: declarations, exports
 * component: stringText = '24.575.275/275-27';
 * html: <p> {{ stringText | replaceRandomString: "*" : ['.', '/', '-'] }}</p>
 * result: '2*.5**.2*5/*7*-**'
 */

@Pipe({
  name: 'replaceRandomString',
})
export class ReplaceRandomStringPipe implements PipeTransform {
  transform(value: string, replaceValue: string, ignoreChars?: string[]): any {
    return value
      .split('')
      .map((char) =>
        Math.random() > 0.5 && !ignoreChars.includes(char)
          ? `${replaceValue}`
          : char
      )
      .join('');
  }
}
