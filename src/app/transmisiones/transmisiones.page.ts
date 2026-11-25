import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
    IonFab,
  IonFabButton,
  IonIcon,
  IonButtons,
  IonMenuButton
} from '@ionic/angular';

@Component({
  selector: 'app-transmisiones',
  templateUrl: './transmisiones.page.html',
  styleUrls: ['./transmisiones.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
   IonFab,
    IonFabButton,
    IonIcon,
    IonButtons,
    IonMenuButton,
    RouterLink
  ],
})
export class TransmisionesPage {

  constructor() {
    addIcons({ homeOutline });
  }

  transmisiones = [
    {
      id: 1,
      nombre: 'Nissan Rogue 4x4',
      tipo: 'Automática CVT',
      anio: '2018',
      precio: 'Consultar'
    },
    {
      id: 2,
      nombre: 'Honda Pilot',
      tipo: 'Automática',
      anio: '2009',
      precio: 'Consultar'
    },
    {
      id: 3,
      nombre: 'Isuzu D-Max',
      tipo: 'Mecánica',
      anio: '2018',
      precio: 'Consultar'
    }
  ];
}