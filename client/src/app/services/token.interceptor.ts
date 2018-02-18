
import { Injectable } from '@angular/core';
import {
  HttpRequest, HttpHandler,
  HttpEvent, HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes('get_auth_token')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${this.auth.getAuth()}`
        }
      });
    }
    return next.handle(request);
  }
}