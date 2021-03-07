import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryEnum} from 'src/app/enum/category.enum';


import {NewsModel} from 'src/app/models/news.model';
import {NewsService} from 'src/app/services/news.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-add-article',
    templateUrl: './add-article.component.html',
    styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
    categories: CategoryEnum[] = [];


    constructor(private service: NewsService, private router: Router, public dialogRef: MatDialogRef<AddArticleComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit(): void {
        this.categories = Object.values(CategoryEnum);
    }

    ajouterArticle(form) {
        if(form.invalid){
          Object.keys(form.controls).forEach(key => {
            form.controls[key].markAsTouched();
          });
          return;
        }
        if(this.data._id){
          this.service.update(this.data._id, this.data).subscribe(data => {
            this.dialogRef.close(data);
          });
        }else{
          this.service.create(this.data).subscribe(data => {
            this.dialogRef.close(data);
          });
        }
    }


}

