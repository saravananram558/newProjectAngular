import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Saravanan ProjectAngular';
  userList=[{id: 1, name:'balamurugan',age:19, native:'jayankondam'},
            {id: 2, name:'Rajarajan',age:15, native:'Annaikarai'},
            {id: 3, name:'Shakthivel',age:15, native:'Kattupiringam'},
            {id: 4, name:'Sudarvizhi',age:21, native:'Annaikarai'},
            {id: 5, name:'Malarvizhi',age:20, native:'Mannuzhi'},
            {id: 6, name:'Keerthana',age:15, native:'jayankondam'}
          ]
}
