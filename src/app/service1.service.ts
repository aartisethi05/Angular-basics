import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  getEmplyoees(){
    return [
      {'name':"Aarti" , "age":23 },
      {'name':"Arun" , "age":22 },
      {'name':"Naina" , "age":22 }
    ]
  }
}
