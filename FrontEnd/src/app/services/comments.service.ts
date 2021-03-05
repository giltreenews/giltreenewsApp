import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentsModel } from '../models/comments.model';

const baseUrl = 'http://localhost:8080/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  
  news: Array<CommentsModel> = new Array<CommentsModel>();

  constructor(private http: HttpClient) { }
 
  getById(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/get/${id}`)
  }
  add(articleId : any, comment : CommentsModel): Observable<any> {
    return this.http.post(`${baseUrl}/add/${articleId}`,comment)
  }
}

