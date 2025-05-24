import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { questionInterface } from '../types';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'http://192.168.1.2:3000/question';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<questionInterface[]> {
    return this.http.get<questionInterface[]>(this.apiUrl);
  }
}
