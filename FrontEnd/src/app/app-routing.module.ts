import { DetailCategoryComponent } from './pages/detail-category/detail-category.component';
import { DetailArticleComponent } from './pages/detail-article/detail-article.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './layout/user/user.component';

const routes: Routes = [
 

  { path: '', redirectTo : '/user/home',  pathMatch: 'full' },
  {path:'user', component: UserComponent, children: [
    { path: "home", component: HomepageComponent },
    { path: "detail-article/:_id", component: DetailArticleComponent },
 
    { path:"detail-category/:category", component: DetailCategoryComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
