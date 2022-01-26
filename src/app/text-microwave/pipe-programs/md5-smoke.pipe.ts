import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5';

@Pipe({
  name: 'md5Smoke'
})
export class Md5SmokePipe implements PipeTransform {
  md5 = new Md5;
  transform(value: string): string {
    return this.md5.appendStr(value).end().toString();
  }
}
