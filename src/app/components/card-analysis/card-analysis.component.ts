import { AfterRenderPhase, Component, Input, OnInit, ViewChild, afterRender } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexStroke, ApexTitleSubtitle, ApexXAxis, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { IDataGraphic } from '../../interfaces/IDataGraphic.interfase';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-card-analysis',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './card-analysis.component.html',
  styleUrl: './card-analysis.component.css'
})
export class CardAnalysisComponent implements OnInit  {
  @Input({ required: true }) Title: string = "Análisis de Venta";
  @Input({ required: true }) Name: string = "Ventas";
  @Input({ required: true }) Data!: IDataGraphic;
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions?: ChartOptions;

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: this.Name,
          data: this.Data.DataY
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: this.Title,
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.Data.DataX
      }
    }
  }
}
