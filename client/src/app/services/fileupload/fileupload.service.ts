import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FileUploadService {
  private basePath = 'http://127.0.0.1:8000';  // TODO: get this from config for production

  public messages = {
    UPLOAD: "File Uploading, please wait ...",
    SUCCESS: "Success!  Data saved",
    FAILURE: "Failure: Something went wrong :("
  }

  constructor(private http: HttpClient) { }

  postFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(this.basePath + '/upload/', formData);
  }

}
