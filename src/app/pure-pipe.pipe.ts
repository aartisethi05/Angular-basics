import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe',
  pure:true
})
export class PurePipePipe implements PipeTransform {

  transform(value){
    console.log("pure"+value);
    return value.sort(function(a, b){return a - b});;
  }

}
