import { Component, OnInit } from '@angular/core';
import { RecipeOperationService } from '../recipe-operation.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.component.html',
  styleUrls: ['./myrecipes.component.css']
})
export class MyrecipesComponent implements OnInit {

  constructor(private recipeOperationService: RecipeOperationService, private router: Router, private loginService: LoginService, private dataService: DataService) { }

  recipes:object;
  ngOnInit() {
    this.getRecipes();
  }
  getRecipes() {
    this.recipeOperationService.getRecipeObjByUserName().subscribe((res)=>{
      this.recipes=res["recipeObj"];
    });
  }
  gotoR(recipe,recipetitle)
  {
    //console.log(this.recipes[i]);
    this.router.navigate(['/recipe-display',recipetitle]);
    this.dataService.sendRecipe(recipe);
  }

}
