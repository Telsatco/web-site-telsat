import { Component, OnInit } from '@angular/core';
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';
import { TelsatInfo } from "app/classes/telsat-info";

@Component({ 
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers: [ServicesTelsat]
})
export class AboutUsComponent implements OnInit {
  companyInfo: TelsatInfo;
  constructor(private infoFooter: ServicesTelsat) { }

  ngOnInit() {
    this.getInfo()
  }

  getInfo(): void {
    this.infoFooter.getCompanyInfo()
        .subscribe(data => this.companyInfo = data )
  }

}
