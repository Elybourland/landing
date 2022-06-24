import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimOutletName'
})
export class TrimOutletNamePipe implements PipeTransform {

  transform(title: string, outletName: string): any {
    // return title.replace(` - ${outletName}`, '');
    return title.split('-').slice(0, -1).join('-');
  }

}
