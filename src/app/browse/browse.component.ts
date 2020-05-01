import { Component, OnInit } from '@angular/core';
import { RecipeOperationService } from '../recipe-operation.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private rs:RecipeOperationService) { }
  recipes:object;
  ngOnInit() {
    this.getRecipes();
  }
  getRecipes()
  {
    this.rs.getRecipe().subscribe((res)=>{      
      this.recipes=res.recipeObj;
      console.log("Inside Browse data is ",this.recipes);
    })
  }

}
