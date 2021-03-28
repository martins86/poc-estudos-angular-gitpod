import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceRandomString',
})
/**
 * Pipe replaces a random character
 * in a string and ignores some other characters
 *
 * @returns `2*.5**.2*5/*7*-**`.
 *
 * @example
 *
 * `<p>{{ stringText | replaceRandomString: "*" : ['.', '/', '-'] }}</p>`
 */
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
