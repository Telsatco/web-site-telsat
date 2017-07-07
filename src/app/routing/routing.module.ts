import { AboutComponent } from './../about/about.component';
import { OurProjectsComponent } from './../our-projects/our-projects.component';
import { OurServicesComponent } from './../our-services/our-services.component';
import { IndexComponent } from './../index/index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', component: IndexComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'servicios', component: OurServicesComponent },
  { path: 'proyectos', component: OurProjectsComponent },
  { path: '', redirectTo:'/inicio', pathMatch: 'full' }   
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
