import { Routes } from '@angular/router';
import { FirebaseResolver } from './core/resolvers/firebase.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingenieria',
    pathMatch: 'full',
  },
  {
    path: 'ingenieria',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Ingenieria',
  },
  {
    path: 'estadisticas',
    loadComponent: () =>
      import('./pages/estadisticas/estadisticas.component').then(
        (m) => m.EstadisticasComponent
      ),
    title: 'Estadisticas',
    resolve: {
      documents: FirebaseResolver
    }
  }
];
