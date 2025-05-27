import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  apiUrl: string = environment.apiBaseUrl
  endpoint: string = "api/ppequestion" 

  constructor(private http: HttpClient, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.http.get(`${this.apiUrl}/${this.endpoint}`, { withCredentials: true }).pipe(
      map(() => true), // If successful → allow
      catchError(() => {
       of(this.router.createUrlTree(['/login']));
        return of(false);
      })
    );
  }
}
