import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TopScoreInterface } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TopScoreService {
  apiUrl : string = environment.apiBaseUrl
  constructor(private http: HttpClient) { 

  }

  getTopScore(endpoint: string ): Observable<TopScoreInterface>{
    return this.http.get<TopScoreInterface>(`${this.apiUrl}/${endpoint}`, {withCredentials:true})
  }

}

