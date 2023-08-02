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
    },
    {
      name: 'Bike Speed Calculator',
      url: 'https://mperleo.github.io/BikeSpeedCalculator/',
      img: 'assets/img/bikeSpeed_banner.jpeg',
      description: 'Calculadora de avance y velocidad de pedalada',
    },
    {
      name: 'Bingo!',
      url: 'https://mperleo.github.io/BingoAngular/',
      img: 'assets/img/bingo_banner.jpeg',
      description: 'Simulador de bingo online',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
