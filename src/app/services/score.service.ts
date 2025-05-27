import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  apiUrl : string = environment.apiBaseUrl
  constructor(private http: HttpClient) { 

  }

  getScore(answers : string[], endpoint: string ): Observable<number>{
    return this.http.post<number>(`${this.apiUrl}/${endpoint}`, {answers}, {withCredentials:true})
  }

}
