import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentsModel} from 'src/app/models/comments.model';
import {NewsModel} from 'src/app/models/news.model';
import {CommentsService} from 'src/app/services/comments.service';
import {NewsService} from 'src/app/services/news.service';
import {UserModel} from 'src/app/models/user.model';
import {UserService} from 'src/app/services/user.service';
import { RoleEnum } from 'src/app/enum/role.enum';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  news: NewsModel = {};
  comments: CommentsModel = {};
  answer: string;
  user: UserModel;
  roleEnum = RoleEnum;
  showResponse : boolean[] = [];

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

  addAnswer(comment,i){
    this.commentsService.addAnswer(comment._id, this.answer).subscribe(data =>{
      this.news.comments[i] = data;
      this.showResponse[i] =false;
    })
  }
}

