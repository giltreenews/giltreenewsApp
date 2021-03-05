import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryEnum } from 'src/app/enum/category.enum';


import { NewsModel } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  newsShema: NewsModel = {};
  categories: CategoryEnum[] = [];


  constructor(private service: NewsService, private router : Router) { }

  ngOnInit(): void {
   this.categories = Object.values(CategoryEnum)
  }

  ajouterArticle() {
    this.service.create(this.newsShema).subscribe(data => {
    this.router.navigateByUrl('/journalist/gerer-les-articles')
    })
  }

  



}

