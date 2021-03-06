import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsModel } from 'src/app/models/comments.model';
import { NewsModel } from 'src/app/models/news.model';
import { CommentsService } from 'src/app/services/comments.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() 
   news : NewsModel = {};
  comments : CommentsModel = {};
  answer : CommentsModel = {}
  constructor(private commentsService: CommentsService,private route : ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
  }

  add(){
    this.commentsService.add(this.news._id, this.comments).subscribe(data =>{
      if(!this.news.comments){
        this.news.comments = [];
      }
       this.news.comments.push(data);
       this.comments = {}
    })
  }

  // addAnswer(){
  //   this.commentsService.add(this.comments.articleId, this.answer).subscribe(data =>{
  //     if(!this.comments.answer){
  //       this.comments.answer = [];
  //     }
  //      this.comments.answer.push(data);
  //      this.answer = {}
  //   })
  // }
}

