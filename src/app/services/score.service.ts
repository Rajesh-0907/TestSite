import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  apiUrl : string = "https://testapi-aw7u.onrender.com/api/score"
  constructor(private http: HttpClient) { 

  }

  getScore(answers : string[] ): Observable<number>{
    return this.http.post<number>(this.apiUrl, {answers})
  }

}
