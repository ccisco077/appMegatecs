import { Component, ViewChild, inject } from '@angular/core';
import { ModalNotificationComponent } from "../pages/modal-notification/modal-notification.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-add',
  standalone: true,
  imports: [ModalNotificationComponent],
  templateUrl: './card-add.component.html',
  styleUrl: './card-add.component.css'
})
export class CardAddComponent {
  private modalService = inject(NgbModal);
  @ViewChild('content') content: any;

  openModal() {
    this.modalService.open(this.content, {
      centered: true,
      size: 'md'
    });
  }
}
