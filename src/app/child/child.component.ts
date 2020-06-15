import { Component, OnInit , Input , Output,EventEmitter} from '@angular/core';
import {Service1Service} from '../service1.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 //service run 
 constructor(private serviceEmplyoees : Service1Service) { }
 public employees=[];
 ngOnInit(): void {
   this.employees=this.serviceEmplyoees.getEmplyoees();
 }
//end service
  message = 'Hi Parent';
  @Input() dataFromParent;
  @Output() passToParent = new EventEmitter();
  sendMessage(){
    this.passToParent.emit(this.message);
  }
 sayHello(){
    alert('hello');
  }
 
}
