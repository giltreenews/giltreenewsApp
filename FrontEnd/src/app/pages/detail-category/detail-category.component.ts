import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {

  news:any;
  constructor(private newService : NewsService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRoute.queryParams.subscribe(param=>
      {
        const search = param.search;
        const category = param.category;
        if(search){
          this.newService.search(search).subscribe(data => {
            this.news = data; 
          });
        }
        if(category){
          this.newService.getAll({category}).subscribe(data=>{
            this.news = data});
        }
        
      });
    }

}
