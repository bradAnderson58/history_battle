import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  public token: string;
  public invalidLogin = false;
  private basePath = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  getAuth(username: string, password: string): Observable<any> {
    /*let test = new Headers({
      'Content-Type': 'application/json',
    });
    let options = new RequestOptions({
      headers: test
    }); */

    return this.http.post<any>(this.basePath + '/get_auth_token/', {username: username, password: password})
      .pipe(
        tap(response => this.handleResponse(response)),
        catchError((error: any) => Observable.throw(this.errorHandler(error)))
      );
  }

  errorHandler(error: any): void {
    this.invalidLogin = true;
    console.log(error);
  }

  handleResponse(response: any): void {
    let token = response.token;
    if (token) {
      this.token = token;
      localStorage.setItem('id_token', token);
      this.invalidLogin = false;
    }
  }

}
