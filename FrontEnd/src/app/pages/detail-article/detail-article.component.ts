import { Component, OnInit ,ViewChild ,ElementRef,AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NewsService } from 'src/app/services/news.service';
import {AutofillMonitor} from '@angular/cdk/text-field';
import { NewsModel } from 'src/app/models/news.model';
@Component({
  selector: 'app-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class ArticleComponent implements OnInit {
 
  news!: NewsModel;
  @ViewChild('first', {read: ElementRef}) firstName: ElementRef<HTMLElement>;
  firstNameAutofilled: boolean;
  constructor(private route: ActivatedRoute,private router: Router,private newsService: NewsService, private autofill: AutofillMonitor) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.params['_id'];
    this.newsService.getById(_id)
      .subscribe(data => {
        this.news = data;
      });
  }

}
