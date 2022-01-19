import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private baseUrl = 'http://localhost:8080/api/commande';
  constructor(private http: HttpClient) { }
  

  getCommande(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCommande(commande: Object): Observable<Object> {
    console.log(commande)
    return this.http.post(`${this.baseUrl}/`, commande);
  }

  updateCommande(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCommande(commande:Object): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete`, commande);
  }

  getCommandesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
