import { Component, inject, OnInit, signal } from '@angular/core';
import { TablaGraficoComponent } from '../../shared/components/tabla-grafico/tabla-grafico.component';
import { initFlowbite } from 'flowbite';
import { LayoutComponent } from '../../shared/layouts/layout/layout.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [
    TablaGraficoComponent,
    LayoutComponent,
    RouterOutlet,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './estadisticas.component.html',
})
export class EstadisticasComponent implements OnInit {
  data$!: Observable<any[]>;
  private activeRoute = inject(ActivatedRoute);
  private datos: any[] = [];
  promedios: number[] = [];
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    initFlowbite();

    this.data$ = this.activeRoute.data.pipe(
      map((data) => data['documents'] as any[])
    );

    this.data$.subscribe((data) => {
      this.datos = data;
      this.utilizarDatos(this.datos);
      this.isLoading.set(false);
    });
  }

  utilizarDatos(datos: any[]): void {
    datos.forEach((dato) => {
      const competencias = dato.competencias;
      const promedio = this.calcularPromedio(competencias);
      this.promedios.push(promedio);
    });
  }

  calcularPromedio(competencias: any): number {
    let suma = 0;
    let count = 0;

    // Recorrer competencias de proceso
    for (const key in competencias.proceso) {
      const competencia = competencias.proceso[key];
      const value = parseInt(competencia.value);
      if (!isNaN(value)) {
        suma += value;
        count++;
      }
    }

    for (const key in competencias.comportamiento) {
      const competencia = competencias.comportamiento[key];
      const value1 = parseInt(competencia.value);
      const value2 = parseInt(competencia.value2);

      if (!isNaN(value1)) {
        suma += value1;
        count++;
      }
      if (!isNaN(value2)) {
        suma += value2;
        count++;
      }
    }

    //return count === 0 ? 0 : suma / count;
    return (suma / 90) * 100;
  }
}
