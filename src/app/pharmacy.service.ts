import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  
  //private baseUrl = 'http://localhost:3000/pharmacies';
  private baseUrl = 'http://localhost:8080/api/pharmacie';
  constructor(private http: HttpClient) { }

  getPharmacy(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  signInPharmacy(pharmacy: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/login`, pharmacy);
  }
  createPharmacy(pharmacy: Object, id:number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, pharmacy);
  }

  updatePharmacy(pharmacy: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, pharmacy);
  }

  deletePharmacy(pharmacy: Object): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/delete`, {body: pharmacy});
  }

  getPharmaciesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
