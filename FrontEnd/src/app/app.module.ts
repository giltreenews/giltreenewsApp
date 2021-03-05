

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtInterceptor } from './interceptor/jwtInterceptor';
import { GererLesArticlesComponent } from './pages/gerer-les-articles/gerer-les-articles.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { FormsModule, NgForm } from '@angular/forms';
import { JournalistComponent } from './layout/journalist/journalist.component';
import { LoginComponent } from './login/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { CreateAccountComponent } from './create-account/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DetailArticleComponent,
    DetailCategoryComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    UserComponent,
    GererLesArticlesComponent,
    EditArticleComponent,
    AddArticleComponent,
    JournalistComponent,
    LoginComponent,
    CreateAccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   AngularMaterialModule,
   HttpClientModule,
   NgbModule,
   FormsModule,
   ToastrModule.forRoot()
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
