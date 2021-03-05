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
  constructor(private service : NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.params.subscribe(categorie =>{
      
      this.service.getAll({categorie:categorie}).subscribe(data=>{
        this.news = data})
    });
    } 
   




}
