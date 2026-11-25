import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

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
  IonItemSliding,
  IonItemOptions,
     IonItemOption,
  IonIcon,
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/angular';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.page.html',
  styleUrls: ['./repuestos.page.scss'],
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
    IonItemSliding,
    IonItemOptions,
       IonItemOption,
    IonIcon,
    IonButton,
    IonButtons,
    IonMenuButton,
    RouterLink
  ],
})
export class RepuestosPage {

  constructor(private cdr: ChangeDetectorRef) {
    addIcons({ trashOutline });
  }

  repuestos = [
    {
      id: 1,
      nombre: 'Faros Toyota Camry',
      anio: '2010',
      precio: 'Consultar'
    },
    {
      id: 2,
      nombre: 'Computadora Toyota Camry',
      anio: '2009',
      precio: 'Consultar'
    },
    {
      id: 3,
      nombre: 'Alternador Hyundai Santa Fe',
      anio: '2019',
      precio: 'Consultar'
    }
  ];

  eliminarRepuesto(id: number) {
    this.repuestos = this.repuestos.filter(
      repuesto => repuesto.id !== id
    );

    this.cdr.detectChanges();
  }
}