import { Component } from '@angular/core';
import { CardInfoComponent } from "../../../components/card-info/card-info.component";
import { CardAddComponent } from "../../../components/card-add/card-add.component";

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CardInfoComponent, CardAddComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

}
