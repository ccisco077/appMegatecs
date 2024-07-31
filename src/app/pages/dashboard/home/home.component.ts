import { Component } from '@angular/core';
import { CardStatsComponent } from "../../../components/card-stats/card-stats.component";
import { CardCarouselComponent } from "../../../components/card-carousel/card-carousel.component";
import { CardFrequentClientComponent } from '../../../components/pages/card-frequent-client/card-frequent-client.component';
import { CardAnalysisComponent } from "../../../components/card-analysis/card-analysis.component";
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardStatsComponent, CardCarouselComponent, CardFrequentClientComponent, CardAnalysisComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgProducts = [
    {
      src: "/img/card-products/img1.svg",
      name: "Beats Headphone 2019",
      description: "S/89.00"
    },
    {
      src: "/img/card-products/img1.svg",
      name: "Beats Headphone 2019",
      description: "S/89.00"
    },
    {
      src: "/img/card-products/img1.svg",
      name: "Beats Headphone 2019",
      description: "S/89.00"
    }
  ]
}
