import { Component, OnInit } from '@angular/core';
import { AppModel } from 'src/app/models/app-model';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'myki-proyects',
  templateUrl: './myki-proyects.component.html',
  styleUrls: ['./myki-proyects.component.sass'],
})
export class MykiProyectsComponent implements OnInit {
  public appList: AppModel[] = [
    {
      name: 'Costos',
      url: '',
      img: 'assets/img/costos_banner.jpeg',
      description: 'Aplicación de fiananzas personales',
      tags: ['php', 'sql', 'bootstrap', 'git'],
    },
    {
      name: 'Bike Speed Calculator',
      url: 'https://mperleo.github.io/BikeSpeedCalculator/',
      img: 'assets/img/bikeSpeed_banner.jpeg',
      description: 'Calculadora de avance y velocidad de pedalada',
      tags: ['Angular 13', 'github pages', 'bootstrap'],
    },
    {
      name: 'Bike Ratios Grapher (WIP)',
      url: 'https://mperleo.github.io/BikeRatiosCalculator/',
      img: 'assets/img/bikeRatios_banner.jpg',
      description: 'Calculadora de relaciones de marcha, incluye gráficos',
      tags: ['Angular', 'Git', 'bootstrap'],
    },
    {
      name: 'Bingo!',
      url: 'https://mperleo.github.io/BingoAngular/',
      img: 'assets/img/bingo_banner.jpeg',
      description: 'Simulador de bingo online',
      tags: ['angular', 'github pages', 'git', 'bootstrap'],
    },
    {
      name: 'Bingo PHP',
      url: 'https://github.com/mperleo/Bingo',
      img: 'assets/img/bingo_banner.jpeg',
      description: 'Simulador de bingo online',
      tags: ['php', 'bootstrap'],
    },
    {
      name: 'Tester!',
      url: 'https://github.com/mperleo/Tester',
      img: 'assets/img/tester_banner.jpeg',
      description: 'Aplicación para realizar examenes tipo test',
      tags: ['php', 'bootstrap'],
    },
    {
      name: 'Droppper',
      url: 'https://github.com/mperleo/Droppper',
      img: 'assets/img/droppper_banner.jpeg',
      description: 'Aplicación de subida de archivos',
      tags: ['php', 'bootstrap'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
