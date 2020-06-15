import { Component, OnInit , Input , Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  message = 'Hi Parent';
  @Input() dataFromParent;
  @Output() passToParent = new EventEmitter();
  sendMessage(){
    this.passToParent.emit(this.message);
  }
 sayHello(){
    alert('hello');
  }
  ngOnInit(): void {
  }

}
