import { Component, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-modal-notification',
  standalone: true,
  imports: [],
  templateUrl: './modal-notification.component.html',
  styleUrl: './modal-notification.component.css'
})
export class ModalNotificationComponent {
  private modalService = inject(NgbModal);

  @ViewChild('modal', { static: true }) modal: any;
  openModal() {
    this.modalService.open(this.modal, { centered: true });
  }
}
