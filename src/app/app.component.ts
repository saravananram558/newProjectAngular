import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MyappComponent } from './myapp/myapp.component';
import { ServicingService } from './servicing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  constructor(public servicing:ServicingService) {
    
  }
  
  title = 'Saravanan ProjectAngular';
  userList=[{id: 1, name:'Balamurugan',age:19, native:'Jayankondam'},
            {id: 2, name:'Rajarajan',age:15, native:'Annaikarai'},
            {id: 3, name:'Shakthivel',age:15, native:'Kattupiringam'},
            {id: 4, name:'Sudarvizhi',age:21, native:'Annaikarai'},
            {id: 5, name:'Malarvizhi',age:20, native:'Mannuzhi'},
            {id: 6, name:'Keerthana',age:15, native:'Jayankondam'}
          ]
  message=''
  @ViewChild(MyappComponent) child:any;

  captureChild(event:string){
    console.log("captureChild",event);
    this.message=event;
  }
  
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.message=this.child.myAppName
    
  }

  show:any;
  ngOnInit():void{
    this.show=this.servicing.hereTheList()
  }
 
}

