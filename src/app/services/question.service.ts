import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { questionInterface } from '../types';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getQuestions(endpoint: string): Observable<questionInterface[]> {
    return this.http.get<questionInterface[]>(`${this.apiUrl}/${endpoint}`, {withCredentials:true});
  }
}
