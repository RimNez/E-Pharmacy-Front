import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  

  //private baseUrl = 'http://localhost:3000/medicaments';
  private baseUrl = 'http://localhost:8080/api/medicament';
  constructor(private http: HttpClient) { }

  addMedicament(medicament: Object) {
    return this.http.post(`${this.baseUrl}/`,medicament);
  }
  getMedicament(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMedicament(medicament: Object): Observable<Object> {
    console.log(medicament)
    return this.http.post(`${this.baseUrl}/`, medicament);
  }

  updateMedicament(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMedicament(medicament:Object): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete`, medicament);
  }

  getMedicamentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
