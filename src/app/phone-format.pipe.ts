import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(rawNum: string) {
    return `+33${rawNum.slice(1, 10)}`;
  }
}
