import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class KeenDataService {

  constructor(private http: HttpClient) { }

  getData(id: number): Observable<any> {
    const url = environment.apiUrl + '/keen/' + id;
    return this.http.get(url);
  }

}
