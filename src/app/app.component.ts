import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';

import {
  homeOutline,
  settingsOutline,
  cogOutline,
  constructOutline
} from 'ionicons/icons';

import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    RouterLink
  ],
})
export class AppComponent {

  constructor() {
    addIcons({
      homeOutline,
      settingsOutline,
      cogOutline,
      constructOutline
    });
  }

}