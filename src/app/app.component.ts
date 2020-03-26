import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ls:LoginService){}
  title = 'food-app';
  // status:boolean=true;
  // changeStatus()
  // {
  //   this.status=!this.status;
  // }
  
}
