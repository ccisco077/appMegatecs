import { Component, ElementRef, TemplateRef, ViewChild, inject, input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard-modal-notification',
  standalone: true,
  imports: [],
  templateUrl: './modal-notification.component.html',
  styleUrl: './modal-notification.component.css'
})
export class ModalNotificationComponent {
  Title = input.required<string>();
  Description = input.required<string>();
  
  private modalService = inject(NgbModal);
  @ViewChild('modal') modal?: TemplateRef<any>;
  
  openModal() {
    this.modalService.open(this.modal, { centered: true })
  }
}
