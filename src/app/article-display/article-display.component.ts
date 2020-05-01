import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.css']
})
export class ArticleDisplayComponent implements OnInit,OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  articleId: string;
  articleObj: object;
  isDataLoaded:boolean=false;
  private articleDataEvent: any;

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(param => {
    //   this.articleId = param.get("id");
    // });
    this.articleDataEvent = this.dataService.articleData.subscribe(data => {
      if (data != null) {
        this.articleObj = data;
        this.isDataLoaded=true;
      } 
    })
  }

  ngOnDestroy(): void {
    this.articleDataEvent.unsubscribe();
  }




}
