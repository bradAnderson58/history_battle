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
  uploadStatus: string;
  hideStatus: boolean = true;
  uploadMessage: string;
  validUpload: Object;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.hideError = this.fileToUpload.type === this.validType;
    this.hideStatus = true;
  }

  isValidFile() {
    return this.fileToUpload === null || this.fileToUpload.type !== this.validType;
  }

  uploadFile() {
    this.uploadMessage = this.fileUploadService.messages.UPLOAD;
    this.hideStatus = false;
    this.uploadStatus = "UPLOADING";
    this.fileUploadService.postFile(this.fileToUpload)
      .subscribe(data => {
        console.log(data);
        this.uploadMessage = this.fileUploadService.messages.SUCCESS;
        this.validUpload = data;
        this.uploadStatus = "SUCCESS";
      }, error => {
        console.log(error);
        console.log(error);
        this.uploadMessage = this.fileUploadService.messages.FAILURE + error.statusText;
        this.uploadStatus = "FAILED";
      });
  }

}
