import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from '../site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  apiUrl = 'http://localhost:8080/api/sites';

  constructor(private http: HttpClient) {}

  ajouterSite(site: Omit<Site, 'id'>): Observable<Site> {
    return this.http.post<Site>(this.apiUrl, site);
  }

  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.apiUrl);
  }

  modifierSite(site: Site): Observable<Site> {
    const url = `${this.apiUrl}/${site.id}`;
    return this.http.put<Site>(url, site);
  }

  supprimerSite(site: Site): Observable<Site> {
    const url = `${this.apiUrl}/${site.id}`;
    return this.http.delete<Site>(url);
  }

  getSiteById(id: number): Observable<Site> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Site>(url);
  }
}
