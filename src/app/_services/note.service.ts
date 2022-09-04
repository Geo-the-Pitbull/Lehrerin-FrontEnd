import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap, catchError } from 'rxjs';
import { Note } from '../_models/note.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseUrl: string = `${environment.baseUrl}/Lehrerin/Notes`;
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl);
  }

  get(id: any): Observable<Note> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  find_By_Student_Name(student_name: any): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.baseUrl}?student_name=${student_name}`);
  }
}
