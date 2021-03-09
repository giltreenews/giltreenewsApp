import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsModel } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  news: NewsModel = {};
  constructor(private service: NewsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const _id = this.activatedRoute.snapshot.params["_id"]
    this.service.getById(_id).subscribe(data => {
      
      this.news = data
      console.log('hi',this.news)
    })
  }

  update() {

    this.service.update(this.news._id, this.news).subscribe(data => {
      this.router.navigateByUrl('/journalist/gerer-les-articles')
    })
}



}
