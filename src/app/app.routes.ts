import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'motores',
    loadComponent: () => import('./motores/motores.page').then((m) => m.MotoresPage),
  },
  {
    path: 'transmisiones',
    loadComponent: () => import('./transmisiones/transmisiones.page').then((m) => m.TransmisionesPage),
  },
  {
    path: 'repuestos',
    loadComponent: () => import('./repuestos/repuestos.page').then((m) => m.RepuestosPage),
  },
];
