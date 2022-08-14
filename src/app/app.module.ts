import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MykiAboutModule } from './views/about/myki-about/myki-about.module';
import { MykiProyectsModule } from './views/proyects/myki-proyects/myki-proyects.module';
import { MykiResourcesModule } from './views/resources/myki-resources/myki-resources.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MykiAboutModule,
    MykiProyectsModule,
    MykiResourcesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
