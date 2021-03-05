import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewsModel } from '../models/news.model';

const baseUrl = 'http://localhost:8080/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  
  news: Array<NewsModel> = new Array<NewsModel>();

  constructor(private http: HttpClient) { }

    getAll(filter?): Observable<any> {
      return this.http.post(baseUrl, filter);
    }
    getById(id: any): Observable<any> {
      return this.http.get(`${baseUrl}/select/${id}`);
    }
    create(data: any): Observable<any> {
      return this.http.post(`${baseUrl}/add`, data);
    }
    update(id: any, data: any): Observable<any> {
      return this.http.put(`${baseUrl}/edit/${id}`, data);
    }
    delete(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/delete/${id}` );
    }
    search(search:any):Observable<any>{
      return this.http.post(`${baseUrl}/recherche`,{search});
    }
  


}


