import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export interface IData {
  id: number;
  name: string;
  values: string[];
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

export interface IGenerales {
  puesto: string;
  area: string;
  nivel: string;
  puesto_jefe: string;
  puestos_supervisa: {
    puesto1: string;
    puesto2: string;
    puesto3: string;
    puesto4: string;
  };
}

export interface ICompetencias {}
