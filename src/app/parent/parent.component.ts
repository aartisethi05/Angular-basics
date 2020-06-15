import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
@ViewChild('name') username:ElementRef;
  constructor() { }
  passToChild : string = "Hi Child";
  dataFromChild:string
  getdata(event){
    this.dataFromChild = event;
  }
  ngOnInit(): void {
  }
  public templateRef(val){
    alert(val);
  }
  public viewchildfunction(){
    alert(this.username.nativeElement.value);
  }
  public getChildRef(child)
  {
    console.log(child);
    child.sayHello();
  }
}
