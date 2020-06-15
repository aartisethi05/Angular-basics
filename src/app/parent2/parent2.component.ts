import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../service1.service';
@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  //service run 
  constructor(private serviceEmplyoees : Service1Service) { }
  public employees=[];
  ngOnInit(): void {
    this.employees=this.serviceEmplyoees.getEmplyoees();
  }
//end service
}
