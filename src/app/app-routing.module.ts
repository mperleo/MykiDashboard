
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MykiAboutComponent } from './views/about/myki-about/myki-about.component';
import { MykiProyectsComponent } from './views/proyects/myki-proyects/myki-proyects.component';
import { MykiResourcesComponent } from './views/resources/myki-resources/myki-resources.component';


const routes: Routes = [
  {
    path: 'proyects',
    component: MykiProyectsComponent,
    children: [
      { path: '', component: MykiProyectsComponent }
    ]
  },
  {
    path: 'about',
    component: MykiAboutComponent,
    children: [
      { path: '', component: MykiAboutComponent }
    ]
  },
  {
    path: 'resources',
    component: MykiResourcesComponent,
    children: [
      { path: '', component: MykiResourcesComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
