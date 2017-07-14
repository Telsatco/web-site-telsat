import { Component, OnInit } from '@angular/core';
import { MisionVisionService } from "app/services/misionVision/mision-vision.service";
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
  mision: AboutUs;
  vision: AboutUs;
  values: AboutUs[];
  philos: ImageInfo;
  orgChart: ImageInfo;

  constructor(
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
      .catch( () => alert("Error de comunicación, Code: #2") )
  }

  getValues(): void {
    this.MisionVisionService.getValues()
      .then( data => this.values = data)
      .catch( () => alert("Error de comunicación, Code: #3") )
  }

  getPhilosOrgImg(): void {
    this.ImagesServices.getPhilosOrg()
      .then( data => {
        this.philos = data[0]
        this.orgChart = data[1]
      })
      .catch( () => alert("Error de comunicación, Code: #4"))
  }

}