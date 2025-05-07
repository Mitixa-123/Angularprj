import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  pure: true

})
export class AppendPipe implements PipeTransform {

  transform(value: string, appendText: string): string {
    // if(value == null) return value;
    return value + appendText;
  }

}
