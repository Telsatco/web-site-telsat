import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';
import { Sector } from "app/classes/sector";
import * as $ from 'jquery';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
  providers: [ServicesTelsat],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0s ease-out', style({
          opacity: 0,
        }))
      ])
    ])
  ]
})


export class OurServicesComponent {
  sectors: Sector[];
  state: string = 'visible';
  subscriptionSectors: any;
  subscriptionParent: any;

  constructor( private sectorService: ServicesTelsat ) { 
    this.getInfoSectors("")
  }

  getInfoSectors(parent: string): void {
    $('html, body').scrollTop(0)
    this.subscriptionSectors = this.sectorService.getSectors(parent)
        .subscribe(data => {
          if (data.length > 0) {
            this.sectors = data
          }
        })
  }

  getInfoParent(parent: string):void {
    $('html, body').scrollTop(0)
    this.subscriptionParent = this.sectorService.getParent(parent)
        .subscribe(data => this.sectors = data)
  }

  ngAfterViewInit(){
    document.getElementById("navbarNav").classList.remove("navbarNav-spy");
  }

  ngOnDestroy() {
    if (this.subscriptionSectors)  this.subscriptionSectors.unsubscribe()
    if (this.subscriptionParent)  this.subscriptionParent.unsubscribe()
  }
}
