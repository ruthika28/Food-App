import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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
  // isCollapsed = true;
}
