import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsSchema } from '../interfaces/news-schema';

const baseUrl = 'http://localhost:8080/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  
  news: Array<NewsSchema> = new Array<NewsSchema>();

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  getLastthree(): Observable<any> {
    return this.http.get(`${baseUrl}/recently`);
  }

  getLasttwenty(): Observable<any> {
    return this.http.get(`${baseUrl}/flashinfos`);
  }

  getLastOne(): Observable<any> {
    return this.http.get(`${baseUrl}/one`);
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/select/${id}`);
  }
  searchByCategory(category: any): Observable<any> {
    return this.http.get(`${baseUrl}/search/${category}`);
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


}


