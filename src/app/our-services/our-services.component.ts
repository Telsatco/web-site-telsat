import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { SectorsService } from "app/services/sectors/sectors.service";
import { Sector } from "app/classes/sector";
import * as $ from 'jquery';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
  providers: [SectorsService],
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


export class OurServicesComponent implements OnInit {
  sectors: Sector[];
  state: string = 'visible';

  constructor(private sectorsService: SectorsService) { }

  ngOnInit() {
    this.getSectors("");
  }

  getSectors(parent: string): void {
    $('html, body').scrollTop(0)
    this.sectorsService.getSectors(parent)
      .then(data => {
        if (data.length > 0) this.sectors = data
      })
      .catch(() => alert("Error de comunicación, code: #12"))
  }

  getParent(parent: string):void {
    $('html, body').scrollTop(0)
    this.sectorsService.getParent(parent)
      .then(data => this.sectors = data )
      .catch(() => alert("Error de comunicación, code: #11"))
  }

  ngAfterViewInit(){
    document.getElementById("navbarNav").classList.remove("navbarNav-spy");
  }
}