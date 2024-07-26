import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  standalone: true,
  imports: [],
  templateUrl: './card-stats.component.html',
  styleUrl: './card-stats.component.css'
})
export class CardStatsComponent {
  @Input({ required: true }) Title!: string;
  @Input({ required: true }) Value!: string;
  @Input({ required: true }) Percentage!: string;
  @Input() Icon: string = "bi bi-people";
  @Input() Positive: boolean = true;
  @Input({ required: true }) Details!: string;
  @Input() Color: string = "#6c63ff";


  // Función para aclarar el color
  lightenColor(color: string, percent: number): string {
    let num = parseInt(color.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = (num >> 8 & 0x00FF) + amt,
      B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1).toUpperCase();
  }
}
