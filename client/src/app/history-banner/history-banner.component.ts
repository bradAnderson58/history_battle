import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'history-banner',
  templateUrl: './history-banner.component.html',
  styleUrls: ['./history-banner.component.css']
})
export class HistoryBannerComponent {
  title = 'History Battle';
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private authService: AuthenticationService, private router: Router) { }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  submitLogin(username, password): void {
    console.log(username, password);
    this.authService.login(username, password)
      .subscribe(response => {
        this.modalRef.hide();
        this.router.navigateByUrl('/dashboard');
      });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

  invalidLogin(): boolean {
    return this.authService.invalidLogin;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
