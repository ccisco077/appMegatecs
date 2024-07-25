import { Component } from '@angular/core';
import { InputLabelBoxComponent } from '../../../components/input-label-box/input-label-box.component';
import { RouterLink } from '@angular/router';
enum typeView {
  "recover",
  "verify",
  "change-password"
}
@Component({
  selector: 'app-recover',
  standalone: true,
  imports: [InputLabelBoxComponent, RouterLink],
  templateUrl: './recover.component.html',
  styleUrl: './recover.component.css'
})
export class RecoverComponent {
  private _view: typeView = typeView['change-password'];
  get view() {
    return this._view;
  }
  private set view(data: typeView) {
    this._view = data;
  }
  
  onChangeInputCustom(data:string, value: string): void {
    console.log(data+"-"+value)
  }
}
