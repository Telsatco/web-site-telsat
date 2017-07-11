import { providers } from 'app/data/data';
import { Component, OnInit } from '@angular/core';
import { FooterInfoService } from "app/services/footerInfo/footer-info.service";
import { TelsatInfo } from "app/classes/telsat-info";

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers: [FooterInfoService]
})
export class AboutUsComponent implements OnInit {
  private companyInfo: TelsatInfo;
  constructor(private infoFooter: FooterInfoService) { }

  ngOnInit() {
    this.getInfo()
  }

  getInfo(): void {
    this.infoFooter.getCompanyInfo()
      .then(data => this.companyInfo = data)
      .catch(() => alert("erro de consulta"))
  }

}
