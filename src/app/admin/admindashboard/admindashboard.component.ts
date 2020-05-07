import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { RecentActionsService } from 'src/app/recent-actions.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  username:String;
  constructor(private ls:LoginService,private router:Router,private dataService:DataService,private ra:RecentActionsService) { }
  actions:object;
  userobj:object;
  ngOnInit() {
    this.username=this.ls.username;
    this.getAction();
    this.getDetails();
  }
  
  addRecipe() {
    this.router.navigate(['/recipe-operation'])
  }
  removeRecipe()
  {
    this.router.navigate(['/recipe-edit'])
  }

  getAction()
  {
    this.ra.getActions().subscribe((res)=>{
      this.actions=res.recentObj
      //console.log("recent actions are",this.actions);
    })
  }

  addArticle() {
    this.router.navigate(['/article-operation'])
  }
  
  addCategory() {
    this.router.navigate(['/category-operation'])
  }

  addAdmin() {
    this.router.navigate(['/admin/addadmin']);
  }

  removeArticles() {
    this.router.navigate(['/remove-articles']);
  }
    
  removeCategories() {
    this.router.navigate(['/remove-category']);
  }

  editProfile() {
    this.router.navigate(['/userprofile']);
    this.dataService.sendAdminData(this.userobj);
  }

  getDetails() {
    this.ls.readProfile().subscribe((res)=>{
      this.userobj=res;
      // this.model.username=res["username"];
      // this.model.emailid=res["email"];
      // this.model.imageUrl=res["imageUrl"];
    });
  }

}
