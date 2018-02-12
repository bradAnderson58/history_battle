import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/fileupload/fileupload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File = null;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
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
