import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'my-angular-app';
   num=3;
   isClass=true;
   isFont=true;
   classes={
     "design":this.isClass,
     "fontS":this.isFont
   }
   styles={
    color:"green",
    fontStyle:"italic"

  }
  fruit="Mango";
  public flowers=["Rose","jasmine","lotus"];
   btnClicked(){
     alert('Button clicked.');
   }
   birthday = new Date(1996, 3, 15);

   arr=[12,3,1,8];
   a1=[];
   sort(value){
    return value.sort(function(a, b){return a - b});
  }
  addItem(item){
    this.arr.push(item.value);
    this.a1=[...this.arr];
    console.log(this.arr);
  }
}
