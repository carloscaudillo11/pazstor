import { Component, Input, OnInit } from '@angular/core';
import { NgApexchartsModule, type ApexAxisChartSeries } from 'ng-apexcharts';
import { ChartOptions } from '../../../core/types';

@Component({
  selector: 'app-tabla-grafico',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './tabla-grafico.component.html',
})
export class TablaGraficoComponent implements OnInit {
  @Input() data: number[] = [];
  chartOptions: ChartOptions;

  getCharts(data: number[]): ApexAxisChartSeries {
    const calificaciones = {
      Bueno: { name: 'Bueno', data: [0], color: '' },
      Regular: { name: 'Regular', data: [0], color: '' },
      Malo: { name: 'Malo', data: [0], color: '' },
    };

    data.forEach((value) => {
      const valueInteger = Math.floor(value);
      if (valueInteger >= 95) {
        calificaciones.Bueno.data.push(valueInteger);
        calificaciones.Bueno.color = '#16a34a';
      } else if (valueInteger >= 90) {
        calificaciones.Regular.data.push(valueInteger);
        calificaciones.Regular.color = '#eab308';
      } else if (valueInteger <= 85) {
        calificaciones.Malo.data.push(valueInteger);
        calificaciones.Malo.color = 'red';
      }
    });

    return Object.values(calificaciones).map((value) => ({
      name: value.name,
      data: value.data,
      color: value.color,
    }));
  }

  ngOnInit(): void {
    if (this.data.length > 0) {
      this.chartOptions.series = this.getCharts(this.data);
    } else {
      this.chartOptions.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
  }

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: '2024',
          data: [],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      title: {
        text: 'Competencias',
      },
      xaxis: {
        categories: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic',
        ],
      },
    };
  }
}
