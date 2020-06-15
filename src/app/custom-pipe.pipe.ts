import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number[] , exponent?: number) {
    console.log("array is: "+value);
     var ar= value.map( val=>{
    return Math.pow(val, isNaN(exponent) ? 1 : exponent);
    })
    return ar;
  }

}
