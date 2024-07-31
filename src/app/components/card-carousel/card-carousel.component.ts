import { Component, Input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselData } from '../../interfaces/IDataCarouselAuth.interfase';

@Component({
  selector: 'app-card-carousel',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './card-carousel.component.html',
  styleUrl: './card-carousel.component.css'
})
export class CardCarouselComponent {
  @Input({ required: true }) Title: string = "Producto destacado";
  @Input({ required: true }) Images: Array<CarouselData> = [];
  constructor(){
    this.Images = [
      {
        src: "/img/card-products/img1.svg",
        name: "Beats Headphone 2019",
        description: "S/89.00"
      },
    ]
  }
}
