import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../_models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  REST_API_URL = 'http://localhost:4040/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  registerTeachers(data: any): Observable<any>{
    return this.http.post(this.REST_API_URL + "/register", data)
  }

  loginTeachers(data: any): Observable<Users>{
    return this.http.post(this.REST_API_URL + "/login", data)
  }
}
