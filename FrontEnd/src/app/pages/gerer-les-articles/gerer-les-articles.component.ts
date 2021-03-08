import {CommentsModel} from 'src/app/models/comments.model';

import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {NewsModel} from 'src/app/models/news.model';
import {NewsService} from 'src/app/services/news.service';
import {MatDialog} from '@angular/material/dialog';
import {AddArticleComponent} from 'src/app/pages/add-article/add-article.component';
import {ToastrService} from 'ngx-toastr';
import {ConfirmationModalComponent} from 'src/app/shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-gerer-les-articles',
  templateUrl: './gerer-les-articles.component.html',
  styleUrls: ['./gerer-les-articles.component.css']
})
export class GererLesArticlesComponent implements OnInit {
  newsmodel: NewsModel = {};
  comments: CommentsModel = {};

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  news: MatTableDataSource<NewsModel> = new MatTableDataSource();
  displayedColumns = ['author', 'title', 'category', 'actions'];

  constructor(private service: NewsService, private dialog: MatDialog, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: any) => {
      this.news = new MatTableDataSource(data);
      this.news.paginator = this.paginator;
      this.news.sort = this.sort;
    })
    this.newsmodel.comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }


  delete(_id: any) {

    this.service.delete(_id).subscribe((res: any) => {
      console.log('haid', _id)
      this.toastrService.success(`L'article a bien été supprimé`)
      this.service.getAll().subscribe((data: any) => {
        this.news = data;
      })
    })
  }

  openAddModal() {
    const dialogRef = this.dialog.open(AddArticleComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const news = this.news.data;
        news.unshift(result);
        this.news.data = news;
        this.news.paginator = this.paginator;
        this.news.sort = this.sort;
        this.toastrService.success('Article ajouté avec succès');
      }
    });
  }

  openEditModal(news, i) {
    news.publishedAt = new Date(news.publishedAt)
    const dialogRef = this.dialog.open(AddArticleComponent, {
      data: news
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let savedNews;
        if (result._id) {
          savedNews = this.news.data;
          savedNews[i] = result;
          this.toastrService.success('Article mis à jour avec succès');
        } else {
          savedNews = this.news.data;
          savedNews.unshift(result);
          this.toastrService.success('Article ajouté avec succès');
        }

        this.news.data = savedNews;
        this.news.paginator = this.paginator;
        this.news.sort = this.sort;
      }
    });
  }

  openDeleteModal(element: any) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: `Etes vous sur de vouloir supprimer cet article ?`,
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.delete(element._id);
      }
    });

  }
}

