import { Component } from '@angular/core';
import { InputLabelBoxComponent } from '../../../components/input-label-box/input-label-box.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputLabelBoxComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  onChangeInputCustom(data:string, value: string): void {
    console.log(data+"-"+value)
  }
}
