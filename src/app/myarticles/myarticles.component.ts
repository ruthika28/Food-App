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
      parent.getImagesFromArticle();
    });
  }

  private getImagesFromArticle() {
    this.model.articleDataList.forEach(article => {
      const content: string = article.content;
      if (content.indexOf('<img') !== -1) {
        const imageRegex = new RegExp("<img [^>]*src=\"[^\"]*\"[^>]*>", "gm");
        const sources = Array.from(content.match(imageRegex));
        if (sources.length > 0) {
          article['imageToDisplay'] = this.byPassInnerHTML(sources[0]);
        }
      }
    });
    this.model.isDataLoaded = true;
  }

  private byPassInnerHTML(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
   
  articleDisplay(article,articletitle) {
    this.router.navigate(['./article-display',articletitle]);
    this.dataService.sendArticle(article);
  }


}
