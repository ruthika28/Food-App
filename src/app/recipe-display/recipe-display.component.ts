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
        //console.log("data is ",data);
        this.recipeObj = data;
        this.isDataLoaded=true;
      } 
    })
  }

  ngOnDestroy(): void {
    this.recipeDataEvent.unsubscribe();
  }

}


