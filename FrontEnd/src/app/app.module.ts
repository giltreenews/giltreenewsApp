

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetailArticleComponent } from './pages/detail-article/detail-article.component';
import { DetailCategoryComponent } from './pages/detail-category/detail-category.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserComponent } from './layout/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailArticleComponent,
    DetailCategoryComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   AngularMaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
