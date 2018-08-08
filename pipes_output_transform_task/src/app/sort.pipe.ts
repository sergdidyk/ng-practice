import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort', 
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, prop: any): any {
    return value.sort((a, b) => {
      return a[prop] > b[prop] ? 1 : -1;
    });
  }

}
