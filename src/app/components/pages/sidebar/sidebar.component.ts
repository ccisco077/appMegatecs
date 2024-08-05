import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  appName: string = environment.NAME_APP;
}
