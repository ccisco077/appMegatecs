import { Component } from '@angular/core';
import { ModalNotificationComponent } from "../pages/modal-notification/modal-notification.component";


@Component({
  selector: 'app-card-add',
  standalone: true,
  imports: [ModalNotificationComponent],
  templateUrl: './card-add.component.html',
  styleUrl: './card-add.component.css'
})
export class CardAddComponent {
}
