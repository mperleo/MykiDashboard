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
      url: 'http://localhost/Costos',
      img: 'assets/img/costos_banner.png',
      description: 'Aplicación de fiananzas personales',
    },
    {
      name: 'Droppper',
      url: 'http://localhost/Droppper',
      img: 'assets/img/droppper_banner.png',
      description: 'Aplicación para subir ficheros a mi servidor',
    },
    {
      name: 'Bingo!',
      url: 'http://localhost/Bingo',
      img: 'assets/img/bingo_banner.png',
      description: 'Bingo online con generador de cartones',
    },
    {
      name: 'Panaper',
      url: 'http://localhost/Panaper',
      img: 'assets/img/panaper_banner.png',
      description: 'Web de empresa',
    },
    {
      name: 'Tester',
      url: 'http://localhost/Tester',
      img: 'assets/img/tester_banner.png',
      description: 'Aplicación para hacer examenes tipo test',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
