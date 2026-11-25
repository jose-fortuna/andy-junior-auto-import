import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  informationCircleOutline,
  copyOutline,
  closeOutline
} from 'ionicons/icons';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  IonButtons,
  IonMenuButton
} from '@ionic/angular';

@Component({
  selector: 'app-motores',
  templateUrl: './motores.page.html',
  styleUrls: ['./motores.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
       IonRefresher,
    IonRefresherContent,
    IonButtons,
    IonMenuButton,
    RouterLink
  ],
})
export class MotoresPage {

constructor(
  private cdr: ChangeDetectorRef,
  private actionSheetCtrl: ActionSheetController,
  private alertCtrl: AlertController
) {
  addIcons({
    informationCircleOutline,
    copyOutline,
    closeOutline
  });
}

  estado = 'Desliza hacia abajo para actualizar';

  motores = this.cargarMotores();

  escalas: Record<number, number> = {};
  distanciaInicial = 0;
  escalaInicial = 1;

  cargarMotores() {
    return [
      {
        id: 1,
        nombre: 'Mitsubishi 4D34',
        tipo: 'Diésel',
        anio: '1999',
        precio: 'Consultar',
        imagen: 'assets/img/mitsubishi-4d34.jpg'
      },
      {
        id: 2,
        nombre: 'Toyota 2JZ-GE',
        tipo: 'Gasolina',
        anio: '2006',
        precio: 'Consultar',
        imagen: 'assets/img/toyota-2jz.jpg'
      },
      {
        id: 3,
        nombre: 'Ford Escape 1.5 Turbo',
        tipo: 'Gasolina',
        anio: '2017',
        precio: 'Consultar',
        imagen: 'assets/img/ford-escape.jpg'
      }
    ];
  }

  actualizar(event: any) {
    setTimeout(() => {

      this.motores = this.cargarMotores();

      this.estado = 'Catálogo actualizado: ' +
        new Date().toLocaleTimeString();

      this.cdr.detectChanges();

      event.target.complete();

    }, 1000);
  }

  calcularDistancia(event: TouchEvent): number {
    const dedo1 = event.touches[0];
    const dedo2 = event.touches[1];

    return Math.hypot(
      dedo2.clientX - dedo1.clientX,
      dedo2.clientY - dedo1.clientY
    );
  }

  iniciarZoom(event: TouchEvent, id: number) {

  console.log('Dedos detectados:', event.touches.length);

  if (event.touches.length === 2) {

    this.distanciaInicial =
      this.calcularDistancia(event);

    this.escalaInicial = this.escalas[id] || 1;

    console.log('Zoom iniciado');
  }
}

  moverZoom(event: TouchEvent, id: number) {
    if (
      event.touches.length === 2 &&
      this.distanciaInicial > 0
    ) {

      const distanciaActual =
        this.calcularDistancia(event);

      const nuevaEscala =
        this.escalaInicial *
        (distanciaActual / this.distanciaInicial);

      this.escalas[id] = Math.min(
        3,
        Math.max(1, nuevaEscala)
      );

      this.cdr.detectChanges();
    }
  }

  finalizarZoom() {
    this.distanciaInicial = 0;
  }

  restablecerZoom(id: number) {
    this.escalas[id] = 1;
    this.cdr.detectChanges();
  }
  temporizador: ReturnType<typeof setTimeout> | null = null;

iniciarPulsacion(motor: any) {
  this.cancelarPulsacion();

  this.temporizador = setTimeout(() => {
    this.temporizador = null;
    this.mostrarMenu(motor);
  }, 800);
}

cancelarPulsacion() {
  if (this.temporizador !== null) {
    clearTimeout(this.temporizador);
    this.temporizador = null;
  }
}

async mostrarMenu(motor: any) {
  const menu = await this.actionSheetCtrl.create({
    header: motor.nombre,
    buttons: [
      {
        text: 'Ver detalles',
        icon: 'information-circle-outline',
        handler: () => {
          this.verDetalles(motor);
        }
      },
      {
        text: 'Copiar nombre',
        icon: 'copy-outline',
        handler: () => {
          navigator.clipboard.writeText(motor.nombre);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close-outline',
        role: 'cancel'
      }
    ]
  });

  await menu.present();
}

async verDetalles(motor: any) {
  const alerta = await this.alertCtrl.create({
    header: motor.nombre,
    message: 'Tipo: ' + motor.tipo +
      ' | Año: ' + motor.anio +
      ' | Precio: ' + motor.precio,
    buttons: ['Aceptar']
  });

  await alerta.present();
}
}