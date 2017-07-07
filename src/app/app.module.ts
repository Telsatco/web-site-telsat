import { RoutingModule } from './routing/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './mainApp/app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonHeaderComponent } from './header/button-header/button-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { ContactUsButtonComponent } from './header/contact-us-button/contact-us-button.component';
import { ContactUsFormComponent } from './header/contact-us-form/contact-us-form.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './footer/about-us/about-us.component';
import { ClientsComponent } from './footer/clients/clients.component';
import { ProvidersComponent } from './footer/providers/providers.component';
import { IndexSectionComponent } from './index/index-section/index-section.component';
import { ScrollDownComponent } from './index/index-section/scroll-down/scroll-down.component';
import { ScrollRightComponent } from './index/index-section/scroll-right/scroll-right.component';
import { DivisionesComponent } from './about/divisiones/divisiones.component';
import { ScrollLeftComponent } from './our-services/scroll-left/scroll-left.component';
import { SectorComponent } from './our-services/sector/sector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonHeaderComponent,
    IndexComponent,
    AboutComponent,
    OurServicesComponent,
    OurProjectsComponent,
    ContactUsButtonComponent,
    ContactUsFormComponent,
    FooterComponent,
    AboutUsComponent,
    ClientsComponent,
    ProvidersComponent,
    IndexSectionComponent,
    ScrollDownComponent,
    ScrollRightComponent,
    DivisionesComponent,
    ScrollLeftComponent,
    SectorComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
