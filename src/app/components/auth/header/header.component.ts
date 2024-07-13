import { Component, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderAuthComponent {
  private env = environment;
  appName: string = this.env.NAME_APP;

}
