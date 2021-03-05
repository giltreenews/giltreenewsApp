import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageKeysEnum } from '../enum/localstorage-keys.enum'

const baseUrl = 'http://localhost:8080/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(data:any): Observable<any> {
    return this.http.post(`${baseUrl}/login`,data);
  }

  getConnectedUser(){
    const user = localStorage.getItem(LocalStorageKeysEnum.USER);
   return JSON.parse(user!);
}

register(data:any){
  return this.http.post(`${baseUrl}/register`,data)
}


}
