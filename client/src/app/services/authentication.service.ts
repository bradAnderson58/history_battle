import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  private token: string;
  private basePath = 'http://127.0.0.1:8000';

  public invalidLogin = false;

  constructor(private http: HttpClient) {
    var currentUser = JSON.parse(localStorage.getItem('current_user'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<any> {

    return this.http.post<any>(this.basePath + '/get_auth_token/', {username: username, password: password})
      .pipe(
        tap(response => this.handleResponse(username, response)),
        catchError((error: any) => Observable.throw(this.errorHandler(error)))
      );
  }

  logout(): void {
    // clear token remove usuer from localStorage
    this.token = null;
    localStorage.removeItem('current_user');
  }

  isLoggedIn(): boolean {
    return this.token !== null;
  }

  getAuth(): string {
    return this.token;
  }

  errorHandler(error: any): void {
    this.invalidLogin = true;
    console.log(error);
  }

  handleResponse(username: string, response: any): void {
    let token = response.token;
    if (token) {
      this.token = token;
      localStorage.setItem('id_token', token);
      localStorage.setItem('current_user', JSON.stringify({name: username, token: token}));
      this.invalidLogin = false;
    }
  }

}
