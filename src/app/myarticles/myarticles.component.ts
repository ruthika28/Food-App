import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ArticleOperationService } from '../article-operation.service';
import { ArticleData } from '../data/article-data';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myarticles',
  templateUrl: './myarticles.component.html',
  styleUrls: ['./myarticles.component.css']
})
export class MyarticlesComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,private dataService:DataService,private router:Router,private loginService: LoginService, private articleOperationService: ArticleOperationService) { }

  model={
    articleDataList: [],
    isDataLoaded: false
  }
  ngOnInit() {
    this.getArticles();
  }
  private getArticles() {
    const parent =this;
    parent.articleOperationService.getArticleDataListByUserName().then(data=>{
      parent.model.articleDataList=data as ArticleData[];
      parent.model.isDataLoaded=true;
    });
  }
   
  articleDisplay(article,articletitle) {
    this.router.navigate(['./article-display',articletitle]);
    this.dataService.sendArticle(article);
  }


}
