import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { LoginService } from '../login.service';
import { ArticleOperationService } from '../article-operation.service';
import { Router } from '@angular/router';
import { CategoryOperationService } from '../category-operation.service';
import { CategoryData } from '../data/category-data';

@Component({
  selector: 'app-article-operation',
  templateUrl: './article-operation.component.html',
  styleUrls: ['./article-operation.component.css']
})
export class ArticleOperationComponent implements OnInit {

  constructor(private articleOperationService: ArticleOperationService, private ls: LoginService, private router: Router
    , private categoryOperationService: CategoryOperationService) { }
  placeholder = "enter details..";
  model = {
    content: '',
    title: '',
    author: '',
    description: '',
    articleContent: new FormControl(),
    categoryList: [],
    categoryNameList: [],
    selectedItems: [],
    dropdownSettings: {},
    isDataLoaded: false
  };
  ngOnInit() {
    this.categoryOperationService.getCategoryDataList().then(data => {
      const categoryList = data as CategoryData[];
      this.model.categoryList = this.isListHasValue(categoryList) ? categoryList : [];
      for (let i = 0; i < this.model.categoryList.length; i++) {
        this.model.categoryNameList.push(this.model.categoryList[i].name);
      }
      this.model.isDataLoaded = true;
    });
    // this.model.categoryNameList = ["chicken", "summer", "winter", "american", "desserts", "dinner"]
    this.model.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      enableCheckAll: false,
      allowSearchFilter: true
    };
  }

  postArticle() {
    if (this.isFormPopulated()) {
      const request = {
        'title': this.model.title,
        'category': this.model.selectedItems,
        'description': this.model.description,
        'content': this.model.content,
        'author': this.model.author,
        'createBy': this.ls.username,
        'createdOn': new Date()
      };
      this.articleOperationService.addArticle(request).subscribe(res => {
        if (res["message"] === "sucessfully added") {
          console.log(res["message"]);
          alert("sucessfully added an article");
          this.router.navigate(['/admindashboard']);
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/admindashboard']);
  }
  isFormPopulated() {
    return this.model.title.length && this.model.selectedItems.length && this.model.author.length && this.model.description.length
      && this.model.content.length;
  }

  private isListHasValue(list) {
    return list !== null && list !== undefined && list.length > 0;
  }

}
