import { EditArticleComponent } from './pages/edit-article/edit-article.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { GererLesArticlesComponent } from './pages/gerer-les-articles/gerer-les-articles.component';
import { JournalistComponent } from './layout/journalist/journalist.component';
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
 
    { path:"detail-category", component: DetailCategoryComponent},
  ]},
  {path:'journalist',component:JournalistComponent, children: [
 
    { path: "article/:_id", component: DetailArticleComponent },
    { path: "gerer-les-articles", component: GererLesArticlesComponent , canActivate:[RoleGuard]},
    { path: "add-article", component: AddArticleComponent , canActivate:[RoleGuard]},
    { path: "edit-article/:_id", component: EditArticleComponent , canActivate:[RoleGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
