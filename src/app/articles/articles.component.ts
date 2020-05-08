import { Component, OnInit, Sanitizer, ViewChild, OnDestroy } from '@angular/core';
import { ArticleOperationService } from '../article-operation.service';
import { ArticleData } from '../data/article-data';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [NgbCarouselConfig]
})
export class ArticlesComponent implements OnInit, OnDestroy {
  // @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  constructor(private articleOperationService: ArticleOperationService, private sanitizer: DomSanitizer, private config: NgbCarouselConfig,
    private router:Router, private dataService: DataService) {
    config.interval = 100000;
    config.showNavigationIndicators = false;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.wrap = true;
  }
  searchTerm:string='';
  
  model = {
    articleDataList: [],
    articleChunkList: [],
    isDataLoaded: false
  }
  ngOnInit() {
    this.getArticles();
  }

  ngOnDestroy(): void {
  }

  private getArticles() {
    const parent = this;
    parent.articleOperationService.getArticleDataList().then(data => {
      parent.model.articleDataList = data as ArticleData[];
      this.model.isDataLoaded = true;
      // for (let i = 0; (i+2) < parent.model.articleDataList.length; i+=3) {
      //   parent.model.articleChunkList.push(parent.model.articleDataList.slice(i, i + 3));
      // }
      // parent.model.articleChunkList.push(parent.model.articleDataList.slice(3 * parent.model.articleChunkList.length, parent.model.articleDataList.length))
      // console.log(parent.model.articleDataList);
      // parent.getImagesFromArticle();
    });
  }

  // private getImagesFromArticle() {
  //   this.model.articleDataList.forEach(article => {
  //     const content: string = article.content;
  //     if (content.indexOf('<img') !== -1) {
  //       const imageRegex = new RegExp("<img [^>]*src=\"[^\"]*\"[^>]*>", "gm");
  //       const sources = Array.from(content.match(imageRegex));
  //       if (sources.length > 0) {
  //         article['imageToDisplay'] = this.byPassInnerHTML(sources[0]);
  //       }
  //     }
  //   });
  //   this.model.isDataLoaded = true;
  // }

  // private byPassInnerHTML(content) {
  //   return this.sanitizer.bypassSecurityTrustHtml(content);
  // }
   
  articleDisplay(article,articletitle) {
    this.router.navigate(['./article-display',articletitle]);
    this.dataService.sendArticle(article);
  }
}
