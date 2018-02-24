import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KeenDataService {
  private basePath = 'http://127.0.0.1:8000';  // TODO: get this from config for production

  constructor(private http: HttpClient) { }

  getData(id: number): Observable<any> {
    const url = this.basePath + '/keen/' + id;
    console.log(url);
    return this.http.get(url);
  }

}
