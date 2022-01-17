import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awesome'
})
export class ColorPipe implements PipeTransform {

  transform(value: string): string {
    return value + ' is AN AWESOME DEVELOPER!!'
  }

}