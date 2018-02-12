import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class FileUploadService {
  private basePath = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  postFile(fileToUpload: File): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(this.basePath + '/upload/', formData)
      .pipe(
        map(response => true)
        // TODO: error handlings
      );
  }

}
