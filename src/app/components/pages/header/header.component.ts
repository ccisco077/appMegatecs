import { Component } from '@angular/core';
import { NgbNavModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [NgbNavModule, NgbPopoverModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
