import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicingService {

  constructor() { }
  hereTheList(){
    return [
      { name:'saravanan',age:23},
      { name:'muthu',age:21},
      { name:'mohan',age:21},
      { name:'ragul',age:23}
    ]
  }
}
