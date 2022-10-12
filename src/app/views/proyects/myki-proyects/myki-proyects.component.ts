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
      url: 'http://90.69.40.18/Costos',
      img: 'assets/img/costos_banner.png',
      description: 'Aplicación de fiananzas personales',
    },
    {
      name: 'Droppper',
      url: 'http://90.69.40.18/Droppper',
      img: 'assets/img/droppper_banner.png',
      description: 'Aplicación para subir ficheros a mi servidor',
    },
    {
      name: 'Bingo! Angular',
      url: 'https://mperleo.github.io/BingoAngular/',
      img: 'assets/img/bingo_banner.png',
      description: 'Bingo online con generador de cartones, version creada con Angular',
    },
    {
      name: 'Bingo! PHP',
      url: 'http://90.69.40.18/Bingo/',
      img: 'assets/img/bingo_banner.png',
      description: 'Bingo online con generador de cartones, version creada en lenguaje PHP',
    },
    {
      name: 'Panaper',
      url: 'http://90.69.40.18/Panaper',
      img: 'assets/img/panaper_banner.png',
      description: 'Web de empresa',
    },
    {
      name: 'Tester',
      url: 'http://90.69.40.18/Tester',
      img: 'assets/img/tester_banner.png',
      description: 'Aplicación para hacer examenes tipo test',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
