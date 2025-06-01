import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { logoutUserInterface } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
    apiUrl : string = environment.apiBaseUrl
  
  constructor(private http: HttpClient) { }
  logoutUser(endpoint: string): Observable<logoutUserInterface>{
      return this.http.post<logoutUserInterface>(`${this.apiUrl}/${endpoint}`,{},{withCredentials:true})
    }
}
