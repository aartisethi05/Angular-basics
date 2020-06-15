import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure:false
})
export class ImpurePipePipe implements PipeTransform {

  transform(value){
    console.log("impure"+value);
    return value.sort(function(a, b){return a - b});;
  }

}
