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
        this.newService.search(search).subscribe(data => {
          console.log(data);
          this.news = data; 
        });
        
      });

      this.activateRoute.params.subscribe(params =>{
      
        this.newService.getAll(params['category']).subscribe(data=>{
          this.news = data})
      });

  } 



}
