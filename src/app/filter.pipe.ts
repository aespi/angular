import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, flag: boolean): any {
    return value.filter((f: any) => f['flag'] === flag);
  }
}
