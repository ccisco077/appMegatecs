import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAuthComponent } from "../../components/auth/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, HeaderAuthComponent, FooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
