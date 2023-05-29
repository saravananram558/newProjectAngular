import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit, AfterContentChecked,AfterContentInit, OnDestroy, DoCheck, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})

export class MyappComponent implements OnInit, OnChanges, AfterViewInit, AfterContentChecked, AfterContentInit, OnDestroy, DoCheck{
   myAppName:string='I am Interpolated' 
   isDisabled:boolean=false 
   show:boolean=false
   array:string[]=['saravanan','uma akka','muthu']
   
  name:string=''

  @Input() public property:any;
  @Input() public users:any;

  @Output() public outtest=new EventEmitter()
  
  
  constructor(){
    console.log("inside constructor"); 
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log("inside DoCheck");
    
  }

  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngAfterContentInit");
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngOnDestroy");
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngAfterViewInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngOnChanges");
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
       sendToParent(){
      this.outtest.emit('saravanan')
    }
}
