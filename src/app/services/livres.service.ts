import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from '../livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  apiUrl = 'http://localhost:8080/api/livres';

  constructor(private http: HttpClient) {}

  ajouterLivre(livre: Omit<Livre, 'id'>): Observable<Livre> {
    return this.http.post<Livre>(this.apiUrl, livre);
  }

  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.apiUrl);
  }

  modifierLivre(livre: Livre): Observable<Livre> {
    const url = `${this.apiUrl}/${livre.id}`;
    return this.http.put<Livre>(url, livre);
  }

  supprimerLivre(livre: Livre): Observable<Livre> {
    const url = `${this.apiUrl}/${livre.id}`;
    return this.http.delete<Livre>(url);
  }
}
