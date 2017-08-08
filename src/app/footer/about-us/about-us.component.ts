import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';
import { TelsatInfo } from "app/classes/telsat-info";

@Component({ 
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers: [ServicesTelsat]
})
export class AboutUsComponent {
  companyInfo: TelsatInfo;
  subscription: any;
  constructor(private infoFooter: ServicesTelsat) { 
    this.getInfo()
  }


  getInfo() {
    this.subscription = this.infoFooter.getCompanyInfo()
        .subscribe(data => this.companyInfo = data )
  }

  ngOnDestroy() {
    if (this.subscription)  this.subscription.unsubscribe()
  }

}
