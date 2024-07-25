import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-label-box',
  standalone: true,
  imports: [],
  templateUrl: './input-label-box.component.html',
  styleUrl: './input-label-box.component.css'
})
export class InputLabelBoxComponent {
  @Input({ required: true })
  label: string="";

  @Input()
  type: string="text";

  @Output()
  onChange = new EventEmitter<string>();

  onChangeValue(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.onChange.emit(inputElement.value);
  }

  viewPassword: boolean = false;
}
