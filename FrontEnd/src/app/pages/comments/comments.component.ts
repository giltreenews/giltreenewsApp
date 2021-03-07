import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentsModel} from 'src/app/models/comments.model';
import {NewsModel} from 'src/app/models/news.model';
import {CommentsService} from 'src/app/services/comments.service';
import {NewsService} from 'src/app/services/news.service';
import {UserModel} from 'src/app/models/user.model';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  news: NewsModel = {};
  comments: CommentsModel = {};
  answer: CommentsModel = {};
  user: UserModel;

  constructor(private commentsService: CommentsService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getConnectedUser();
  }

  add() {
    this.commentsService.add(this.news._id, this.comments).subscribe(data => {
      if (!this.news.comments) {
        this.news.comments = [];
      }
      this.news.comments.unshift(data);
      this.comments = {};
    });
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

