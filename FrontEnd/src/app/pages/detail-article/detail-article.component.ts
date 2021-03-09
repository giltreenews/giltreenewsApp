import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {NewsService} from 'src/app/services/news.service';
import {NewsModel} from 'src/app/models/news.model';

@Component({
    selector: 'app-article',
    templateUrl: './detail-article.component.html',
    styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

    news: NewsModel;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private newsService: NewsService) {
    }

    ngOnInit(): void {
        const _id = this.route.snapshot.params._id;
        this.newsService.getById(_id).subscribe(data => {
                this.news = data;
                this.news.comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            });
    }

}
