import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginInterface, loginResponseInterface, questionInterface } from '../types';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl : string = environment.apiBaseUrl
  constructor(private http: HttpClient) { 

  }

  getUser(logindata: loginInterface, endpoint: string ): Observable<loginResponseInterface>{
    return this.http.post<loginResponseInterface>(`${this.apiUrl}/${endpoint}`, logindata, {withCredentials:true})
  }
}
