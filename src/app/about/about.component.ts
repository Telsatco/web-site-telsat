import { Component, OnInit } from '@angular/core';
import { AboutUs } from "app/classes/about-us";
import { ImageInfo } from "app/classes/imageInfo";

import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ ServicesTelsat ]
})
export class AboutComponent {
  mision: AboutUs;
  vision: AboutUs;
  values: AboutUs[];
  philos: ImageInfo;
  orgChart: ImageInfo;
  subscription: any;

  constructor( private aboutUsServices: ServicesTelsat ) {
    this.getInfoAboutUs()
   }

  ngAfterViewInit(){
    document.getElementById("navbarNav").classList.remove("navbarNav-spy");
  }


  private getInfoAboutUs(): void {
    this.subscription = this.aboutUsServices.getAboutUs()
        .subscribe(({mision, vision, philos, orgChart, values}) => {
          this.mision = mision
          this.vision = vision
          this.values = values
          this.philos = philos
          this.orgChart = orgChart
        })
  }

  ngOnDestroy() {
    if (this.subscription)  this.subscription.unsubscribe()
  }
}