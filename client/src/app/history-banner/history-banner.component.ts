import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'history-banner',
  templateUrl: './history-banner.component.html',
  styleUrls: ['./history-banner.component.css']
})
export class HistoryBannerComponent {
  title = 'History Battle';
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    console.log('does it')
    this.modalRef = this.modalService.show(template);
  }

}
