import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class GettingStartedComponent implements OnInit {

  isLinear = false;

  list_requisitos: string[] = [
    'Minecraft 1.16.5 instalado. (Premium o No Premium)',
    'Algún programa para extraer archivos, como WinRAR',
    'Carpeta "Mods" de discord',
    'Carpeta "Mods Opcionales" de discord',
    'Tener Java 16 o superior instalado'
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
