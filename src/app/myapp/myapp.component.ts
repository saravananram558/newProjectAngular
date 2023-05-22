import { Component,OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})

export class MyappComponent implements OnInit, OnChanges, AfterViewInit{
   myAppName:string='tesla'
   isDisabled:boolean=false
   show:boolean=false
   array:string[]=['saravanan','uma akka','muthu']
   arrObj:any=[{id: 1, name:'balamurugan',age:19, native:'jayankondam'},
               {id: 2, name:'Rajarajan',age:15, native:'Annaikarai'},
               {id: 3, name:'Shakthivel',age:15, native:'Kattupiringam'},
               {id: 4, name:'Sudarvizhi',age:21, native:'Annaikarai'},
               {id: 5, name:'Malarvizhi',age:20, native:'Mannuzhi'},
               {id: 6, name:'Keerthana',age:15, native:'jayankondam'}
              ]
  name:string=''
  constructor(){
    console.log("inside constructor");
    
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('inside ngOnInit');
    
  }

       onClick(e:any){
        this.myAppName='BMW'
        this.isDisabled=!this.isDisabled
        this.array.push('maha')
        console.log(e);    
       }
}
