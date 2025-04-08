import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from '../models/vacancy';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VacancyService {
  private apiUrl = 'http://localhost:8000/api/vacancies';

  constructor(private http: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }

  getTopVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}/top_ten/`);
  }
}
