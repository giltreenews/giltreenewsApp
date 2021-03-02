import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  newsShema: NewsSchema= {};
  news:any;
  newsBis:any;
  
  constructor(private newsService : NewsService,private router: Router) { }

  

  ngOnInit(): void {
    this.recupThreeNews();
    this.recupTwentyNews();
    
  }

  recupThreeNews(){
    this.newsService.getLastthree().subscribe(
      data => {
        this.news = data;
        console.log(data)
      },
      error => {
        console.log(error);
      })
  }

  recupTwentyNews(){
    this.newsService.getLasttwenty().subscribe(
      data => {
        this.newsBis = data;
        console.log(data);
      },
      error => {
        console.log(error);
      })
      
    }
  



}
