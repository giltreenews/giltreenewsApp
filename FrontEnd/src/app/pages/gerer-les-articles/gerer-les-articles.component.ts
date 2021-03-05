
import { CommentsModel } from 'src/app/models/comments.model';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NewsModel } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-gerer-les-articles',
  templateUrl: './gerer-les-articles.component.html',
  styleUrls: ['./gerer-les-articles.component.css']
})
export class GererLesArticlesComponent implements OnInit {
  newsmodel : NewsModel = {};
  comments : CommentsModel = {};

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  
  news: MatTableDataSource<NewsModel> = new MatTableDataSource();
  displayedColumns = ['author', 'title', 'category', 'actions'];

  constructor(private service: NewsService, private router: Router, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: any) => {
      this.news = new MatTableDataSource(data);
      this.news.paginator = this.paginator;
      this.news.sort = this.sort;
    })
  }
 

  delete(_id: any) {

    this.service.delete(_id).subscribe((data: any) => {
      console.log('haid', _id)
      this.service.getAll().subscribe((data: any) => {
        this.news = data;
      })
    })
  }
}

