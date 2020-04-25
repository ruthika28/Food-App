import { Component, OnInit, Sanitizer, ViewChild } from '@angular/core';
import { ArticleOperationService } from '../article-operation.service';
import { ArticleData } from '../data/article-data';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [NgbCarouselConfig]
})
export class ArticlesComponent implements OnInit {
  // @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  constructor(private articleOperationService: ArticleOperationService, private sanitizer: DomSanitizer, private config: NgbCarouselConfig) {
    config.interval = 100000;
    config.showNavigationIndicators = false;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.wrap = true;
  }
  model = {
    articleDataList: [],
    articleChunkList: [],
    isDataLoaded: false
  }
  ngOnInit() {
    this.getArticles();
  }

  private getArticles() {
    const parent = this;
    parent.articleOperationService.getArticleDataList().then(data => {
      parent.model.articleDataList = data as ArticleData[];
      for (let i = 0; (i+2) < parent.model.articleDataList.length; i+=3) {
        parent.model.articleChunkList.push(parent.model.articleDataList.slice(i, i + 3));
      }
      parent.model.articleChunkList.push(parent.model.articleDataList.slice(3 * parent.model.articleChunkList.length, parent.model.articleDataList.length))
      console.log(parent.model.articleDataList);
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

}
