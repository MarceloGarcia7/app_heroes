import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, query: any): any {

    if(query === '' || query === undefined) {
      return value;
    }
    return value.filter(user => user.fullname.toLowerCase().indexOf(query.toLowerCase()) != -1 || user.id.toString() === query);
  }

}
