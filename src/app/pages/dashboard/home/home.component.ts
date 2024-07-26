import { Component } from '@angular/core';
import { CardStatsComponent } from "../../../components/card-stats/card-stats.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardStatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
