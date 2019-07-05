import { Pipe, PipeTransform } from '@angular/core';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | viewCount
 * Example:
 *   {{ 23000 | viewCount }}
 *   formats to: 2.3만회
 *   {{ 63000000 | viewCount }}
 *   formats to: 6300만회
 *   {{ 430000000 | viewCount }}
 *   formats to: 4.3억회
*/
@Pipe({
  name: 'viewCount'
})
export class ViewCountPipe implements PipeTransform {
  transform(value: number): string {
    const units = ['만회', '억회'];
    for (let i = units.length - 1; i >= 0; i--) {
      let decimal = Math.pow(10000, i + 1);
      if (value >= decimal) {
        const quotient = value / decimal;
        // if (quotient > 10) {
        //   return quotient.toFixed(0) + units[i];
        // }
        return quotient.toFixed(quotient > 10 ? 0 : 1) + units[i];
      }
    }
  }
}
