import { Component, Inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-modal-notification',
  standalone: true,
  imports: [],
  templateUrl: './modal-notification.component.html',
  styleUrl: './modal-notification.component.css'
})
export class ModalNotificationComponent {
  @Input() Title!: string;
  @Input() Description!: string;
  @Input() Modal: any;

}
