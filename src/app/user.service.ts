import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    console.log(user);
    return this.http.post(`${this.baseUrl}/`, user);
  }

  signInUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }
  signInAdmin(admin: Object): Observable<Object> {
    return this.http.post(`http://localhost:8085/api/Admin/login`, admin);
  }

  updateUser(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, value);
  }

  deleteUser(user:Object): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete`, user);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
