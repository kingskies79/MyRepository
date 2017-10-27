import { Pipe, PipeTransform } from '@angular/core';
import {Joke} from './joke';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {
  joke: Joke;
  transform(value: string, clean: string): string {
    let stringa = '';
    if (clean.match(value)) {
     stringa =  '$%#@!';
    } else {
    stringa =   value;
    }
    return stringa;
  }

}
