import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent implements OnInit {

  recipeDataEvent:any;
  isDataLoaded:boolean=false;
  constructor(private ar:ActivatedRoute,private hc:HttpClient,private ds:DataService) { }
  id:string;
  recipeObj:object;
  ngOnInit() {
    this.recipeDataEvent = this.ds.recipeData.subscribe(data => {
      if (data != null) {  
        this.recipeObj = data;
        this.isDataLoaded=true;
        //console.log("recipeObj is ",this.recipeObj);
        //console.log("category is ",this.recipeObj['category']);   
      } 
    })
  }

  ngOnDestroy(): void {
    this.recipeDataEvent.unsubscribe();
  }

}


