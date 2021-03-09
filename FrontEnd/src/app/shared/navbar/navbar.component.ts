import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryEnum} from 'src/app/enum/category.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText: string;
  category: CategoryEnum;
  categoryEnum = CategoryEnum;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goTo(category): void {
    this.category = category;
    this.router.navigate(['/user/detail-category'], {queryParams: {category}});
  }

  search(): void {
    this.router.navigate(['/user/detail-category'], {queryParams: {search: this.searchText}});
  }
}
