import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficadona',
  templateUrl: './graficadona.component.html',
  styles: []
})
export class GraficadonaComponent implements OnInit {

  // Doughnut

  @Input() leyenda: string = '';
  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
    console.log('Leyenda', this.leyenda);
    console.log('doughnutChartLabels', this.doughnutChartLabels);
    console.log('doughnutChartData', this.doughnutChartData);
    console.log('doughnutChartType', this.doughnutChartType);
  }

}
