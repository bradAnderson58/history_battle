import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'history-banner',
  templateUrl: './history-banner.component.html',
  styleUrls: ['./history-banner.component.css']
})
export class HistoryBannerComponent {
  title = 'History Battle';
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private authService: AuthenticationService) { }

  openModal(template: TemplateRef<any>): void {
    console.log('does it')
    this.modalRef = this.modalService.show(template);
  }

  submitLogin(username, password): void {
    console.log(username, password);
    this.authService.getAuth(username, password)
      .subscribe(response => {
        this.modalRef.hide();
      });
  }

  invalidLogin(): boolean {
    return this.authService.invalidLogin;
  }

}
