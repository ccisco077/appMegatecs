import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselData } from '../../../interfaces/IDataCarouselAuth.interfase';

@Component({
  selector: 'app-auth-carousel',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselAuthComponent {
  images: Array<CarouselData> = [
    {
      src: "img/auth-carousel/image-1.svg",
      name: "image-1"
    },
    {
      src: "img/auth-carousel/image-1.svg",
      name: "image-2"
    }
  ]
}
