import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class FileUploadService {

  public messages = {
    UPLOAD: "File Uploading, please wait ...",
    SUCCESS: "Success!  Data saved",
    FAILURE: "Upload Failure: "
  }

  constructor(private http: HttpClient) { }

  postFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(environment.apiUrl + '/upload/', formData);
  }

}
