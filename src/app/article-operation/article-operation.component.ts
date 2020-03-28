import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-article-operation',
  templateUrl: './article-operation.component.html',
  styleUrls: ['./article-operation.component.css']
})
export class ArticleOperationComponent implements OnInit {

  constructor() { }
  placeholder = "enter details..";
  model = {
    content: '',
    title: '',
    author: '',
    articleContent: new FormControl(),
    categoryList: [],
    selectedItems: [],
    dropdownSettings: {}
  };
  ngOnInit() {
    this.model.categoryList = ["chicken", "summer", "winter", "american", "desserts", "dinner"]
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

  onItemSelect(item: any) {
    this.model.selectedItems.push(item);
  }

  onItemDeSelect(item: any) {
    this.model.selectedItems = this.model.selectedItems.filter(category => category !== item);
  }
  submitForm(userObj) {
    // if (this.model.isRegisterEnabled) {
    //   this.rs.doRegister(userObj).subscribe((res) => {
    //     //alert(res['message'])
    //     if (res["message"] === "username already existed") {
    //       this.model.isRegisterEnabled = false;
    //       this.model.usernameErrMsg = 'Username already exists';
    //       this.model.isUsernameValid = false;
    //     }
    //     if (res["message"] === "register successful") {
    //       this.route.navigate(["./login"]);
    //     }
    //   })
    // }
  }

}
