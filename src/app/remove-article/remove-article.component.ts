import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ArticleOperationService } from '../article-operation.service';
import { ArticleData } from '../data/article-data';

@Component({
  selector: 'app-remove-article',
  templateUrl: './remove-article.component.html',
  styleUrls: ['./remove-article.component.css'],

})
export class RemoveArticleComponent implements OnInit {

  constructor(private loginService: LoginService, private articleOperationService: ArticleOperationService) { }

  model: any = {
    articleDataList: [],
    isDataLoaded: false,
    selectOptions: Object,
    editSettings: Object,
    
  }

  displayedColumns: string[] = ['imageUrl','title','author','createdOn','createBy','action'];
  columns:Array<any>=[
    {name:'imageUrl',label:'Article Image'},
    {name:'title',lable:'Title'},
    {name:'author',label:'Author'},
    {name:'createdOn',label:'Created On'},
    {name:'createBy',label:'Created By'},
    {name:'action',label:'Action'}
  ];
  ngOnInit() {
    if (this.loginService.role === "admin") {
      this.getArticles();
    } else {
      this.getArticlesByUsername();
    }
  }

  getArticles() {
    this.articleOperationService.getArticleDataList().then(data => {
      this.model.articleDataList = data as ArticleData[];
      this.model.isDataLoaded = true;
    })
  }

  getArticlesByUsername() {
    this.articleOperationService.getArticleDataListByUserName().then(data=>{
      this.model.articleDataList=data as ArticleData[];
      this.model.isDataLoaded=true;
    })
  }



}
