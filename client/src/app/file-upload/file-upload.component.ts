import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/fileupload/fileupload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  validType: string = ".csv";
  fileToUpload: File = null;
  hideError: boolean = true;
  uploadStatus: string;
  hideStatus: boolean = true;
  uploadMessage: string;
  validUpload: Object;
  extension: string;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    const name = this.fileToUpload.name;
    this.extension = name.substring(name.lastIndexOf('.'));
    this.hideError = this.extension === this.validType;
    this.hideStatus = true;
  }

  isValidFile() {
    return this.fileToUpload === null || this.extension !== this.validType;
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
        this.uploadMessage = this.fileUploadService.messages.FAILURE + error.statusText;
        this.uploadStatus = "FAILED";
      });
  }

}
