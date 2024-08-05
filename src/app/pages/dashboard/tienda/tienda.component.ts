import { Component } from '@angular/core';
import { CardInfoComponent } from "../../../components/card-info/card-info.component";

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CardInfoComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

}
