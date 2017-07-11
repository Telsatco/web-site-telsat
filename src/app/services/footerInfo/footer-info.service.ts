import { Injectable } from '@angular/core';
import { TelsatInfo } from "app/classes/telsat-info";
import { contactFooter } from "app/data/data";

@Injectable()
export class FooterInfoService {

  constructor() { }

  getCompanyInfo(): Promise <TelsatInfo> {
    return Promise.resolve(contactFooter);
  }

}
