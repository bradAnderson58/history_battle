import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/fileupload/fileupload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  validType: string = "text/csv";
  fileToUpload: File = null;
  hideError: boolean = true;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.hideError = this.fileToUpload.type === this.validType;
  }

  isValidFile() {
    return this.fileToUpload === null || this.fileToUpload.type !== this.validType;
  }

  uploadFile() {
    this.fileUploadService.postFile(this.fileToUpload)
      .subscribe(data => {
        console.log("success");  // TODO: something more meaningful
      }, error => {
        console.log("error");  // TODO: something more meaningful
      });
  }

}
