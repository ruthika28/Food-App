import { Component, OnInit } from '@angular/core';
import { CategoryData } from '../data/category-data';
import { CategoryOperationService } from '../category-operation.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private categoryOperationService: CategoryOperationService,private router:Router, 
    private dataService: DataService) { }

  model={
    categoryDataList:[],
    isDataloaded:false
  }
  ngOnInit() {
   this.getCategory();
  }
  private getCategory() {
    const parent = this;
    parent. categoryOperationService .getCategoryDataList().then(data => {
      parent.model.categoryDataList = data as CategoryData[];
      parent.model.isDataloaded=true;
    });
  }

}
