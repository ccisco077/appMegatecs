import { Component } from '@angular/core';
import { InputLabelBoxComponent } from "../../../components/input-label-box/input-label-box.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputLabelBoxComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onChangeInputCustom(data:string, value: string): void {
    console.log(data+"-"+value)
  }
}
