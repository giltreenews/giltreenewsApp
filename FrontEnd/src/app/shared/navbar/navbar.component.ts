import { Component, OnInit } from '@angular/core';
import { CategoryEnum } from 'src/app/enum/category.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categoryEnum = CategoryEnum;
  constructor() { }

  ngOnInit(): void {

  }

}
