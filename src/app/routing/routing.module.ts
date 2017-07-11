import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "app/index/index.component";
import { AboutComponent } from "app/about/about.component";
import { OurServicesComponent } from "app/our-services/our-services.component";
import { OurProjectsComponent } from "app/our-projects/our-projects.component";

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
