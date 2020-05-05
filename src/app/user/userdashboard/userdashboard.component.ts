import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { ArticleOperationService } from 'src/app/article-operation.service';
import { RecipeOperationService } from 'src/app/recipe-operation.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  username:String;
  constructor(private ls:LoginService,private router:Router,private articleOperationService:ArticleOperationService,
    private recipeOperationService:RecipeOperationService) { }

  ngOnInit() {
    this.username=this.ls.username;
    this.totalArticles();
    this.totalRecipes();
  }

  model:any={
    noOfArticles:0,
    noOfRecipes:0
  }
  totalArticles() {
    this.articleOperationService.getTotalArticles().subscribe((res)=>{
      this.model.noOfArticles=res["count"];
    })
  }
  totalRecipes() {
    this.recipeOperationService.getTotalRecipes().subscribe((res)=>{
      this.model.noOfRecipes=res["count"];
    })
  }

  addArticles() {
    this.router.navigate(['/article-operation'])
  }

  addRecipes() {
    this.router.navigate(['/recipe-operation'])
  }

  myRecipes() {
    this.router.navigate([`/myrecipes/${this.ls.username}`]);
  }

  myArticles() {
    this.router.navigate([`/myarticles/${this.ls.username}`]);
  }

}
