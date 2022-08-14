import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MykiAboutComponent } from './myki-about.component';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    MykiAboutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class MykiAboutModule { }
