import {Router} from '@angular/router';
import {NewsService} from 'src/app/services/news.service';
import {Component, OnInit} from '@angular/core';
import {NewsModel} from 'src/app/models/news.model';
import {RoleEnum} from 'src/app/enum/role.enum';
import {UserModel} from 'src/app/models/user.model';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  newsShema: NewsModel = {};
  news: any;
  newsBis: any;
  roleEnum = RoleEnum;
  user: UserModel;

  constructor(private newsService: NewsService, private router: Router, private userService: UserService) {
  }


  ngOnInit(): void {
    this.recupThreeNews();
    this.recupTwentyNews();
    this.user = this.userService.getConnectedUser();
  }

  recupThreeNews() {
    this.newsService.getAll({limit: 6}).subscribe(
      data => {
        this.news = data;
      });
  }

  recupTwentyNews() {
    this.newsService.getAll({limit: 20}).subscribe(
      data => {
        this.newsBis = data;
        console.log(data);
      },
      error => {
        console.log(error);
      })

  }


}
