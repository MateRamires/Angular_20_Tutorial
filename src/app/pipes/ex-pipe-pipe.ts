import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exPipe'
})
export class ExPipe implements PipeTransform {

  transform(value: any): unknown {
    if(value !== null && value !== undefined && value !== '') {
      return value;
    } else {
      return "Not Available";
    }
  }

}
