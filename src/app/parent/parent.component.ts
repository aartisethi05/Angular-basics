import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
@ViewChild('name') username:ElementRef;

//service run 
  constructor(private serviceEmplyoees : Service1Service) { }
  public employees=[];
  ngOnInit(): void {
    this.employees=this.serviceEmplyoees.getEmplyoees();
  }
//end service
  passToChild : string = "Hi Child";
  dataFromChild:string
  getdata(event){
    this.dataFromChild = event;
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
