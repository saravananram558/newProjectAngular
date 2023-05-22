import { Component } from '@angular/core';


interface I{
  name:string
  age:number
  email:string
}

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})

export class PracticeComponent{
i:I[]=[
  {
    name:'saravanan',
    age:12,
    email:'sara@2345'
  },
  {
    name:'muthu',
    age:10,
    email:'muthu@2345'
  },
  {
    name:'ragul',
    age:11,
    email:'ragul@2345'
  },
  {
    name:'maruthu',
    age:11,
    email:'asd@2345'
  }
]

}
