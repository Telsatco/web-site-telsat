import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MisionVisionService } from "app/services/misionVision/mision-vision.service";
import * as $ from 'jquery';
import { AboutUs } from "app/classes/about-us";
import { ImagesService } from "app/services/imagesServices/images.service";
import { ImageInfo } from "app/classes/imageInfo";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ MisionVisionService, ImagesService ]
})
export class AboutComponent implements OnInit {
  private mision: AboutUs;
  private vision: AboutUs;
  private values: AboutUs[];
  private philos: ImageInfo;
  private orgChart: ImageInfo;

  constructor(
      private location: Location,
      private MisionVisionService: MisionVisionService,
      private ImagesServices: ImagesService
      ) { }

  ngOnInit() {
    this.getMisionAndVision()
    this.getValues()
    this.getPhilosOrgImg()
  }

  ngAfterViewInit(){
    document.getElementById("navbarNav").classList.remove("navbarNav-spy");
  }

  getMisionAndVision(): void {
    this.MisionVisionService.getMisionVision()
      .then( data => {        
        this.mision = data[0]
        this.vision = data [1]
      })
      .catch( () => alert("Error consultando mision y vision") )
  }

  getValues(): void {
    this.MisionVisionService.getValues()
      .then( data => this.values = data)
      .catch( () => alert("Error consultando valores") )
  }

  getPhilosOrgImg(): void {
    this.ImagesServices.getPhilosOrg()
      .then( data => {
        this.philos = data[0]
        this.orgChart = data[1]
      })
      .catch( () => alert("error cargando imagenes"))
  }

}