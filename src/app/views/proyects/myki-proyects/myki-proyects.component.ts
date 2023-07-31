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
      img: 'assets/img/costos_banner.png',
      description: 'Aplicación de fiananzas personales',
    },
    {
      name: 'Droppper',
      url: '',
      img: 'assets/img/droppper_banner.png',
      description: 'Aplicación para subir ficheros a mi servidor',
    },
    {
      name: 'Bike Speed Calculator',
      url: 'https://mperleo.github.io/BikeSpeedCalculator/',
      img: 'assets/img/bikeSpeed_banner.png',
      description: 'Calcula el avance y velocidad de pedalada de tu transmisión',
    },
    {
      name: 'Bingo! Angular',
      url: 'https://mperleo.github.io/BingoAngular/',
      img: 'assets/img/bingo_banner.png',
      description: 'Bingo online con generador de cartones, version creada con Angular',
    },
    {
      name: 'Panaper',
      url: '',
      img: 'assets/img/panaper_banner.png',
      description: 'Web de empresa',
    },
    {
      name: 'Tester',
      url: '',
      img: 'assets/img/tester_banner.png',
      description: 'Aplicación para hacer examenes tipo test',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
