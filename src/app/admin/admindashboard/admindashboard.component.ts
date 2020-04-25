import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  username:String;
  constructor(private router:Router,private ls:LoginService) { }

  ngOnInit() {
    this.username=this.ls.username;
  }
  addArticle() {
    this.router.navigate(['/article-operation'])
  }
  addCategory() {
    this.router.navigate(['/category-operation'])
  }
  addRecipe() {
    this.router.navigate(['/recipe-operation'])
  }

}
