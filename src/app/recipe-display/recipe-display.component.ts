import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private hc:HttpClient) { }
  id:string;
  recipeObj:object;
  ngOnInit() {
    this.ar.paramMap.subscribe(param=>{

      this.id=param.get("id");
      //console.log("id is ",this.id);

        this.hc.get(`/recipe/display/${this.id}`).subscribe((objOfres:object)=>{
             
         this.recipeObj=objOfres["data"];
        // console.log("recipe is ",this.recipeObj); 
       })
    });
  }

}
