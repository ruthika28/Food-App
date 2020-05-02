import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { RecentActionsService } from 'src/app/recent-actions.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  username:String;
  constructor(private ls:LoginService,private router:Router,private ra:RecentActionsService) { }
  actions:object;
  ngOnInit() {
    this.username=this.ls.username;
    this.getAction();
  }
  
  addRecipe() {
    this.router.navigate(['/recipe-operation'])
  }
  removeRecipe()
  {
    this.router.navigate(['/recipe-edit'])
  }

  addArticle() {
    this.router.navigate(['/article-operation'])
  }

  
  addCategory() {
    this.router.navigate(['/category-operation'])
  }
  getAction()
  {
    this.ra.getActions().subscribe((res)=>{
      this.actions=res.recentObj
      //console.log("recent actions are",this.actions);
    })
  }

}
