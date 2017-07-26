import { Injectable } from '@angular/core';
import { TelsatInfo } from "app/classes/telsat-info";
import { contactFooter } from "app/data/data";
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class FooterInfoService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private footerUrl = 'api/footer';
  constructor( private http: Http) { }

  getCompanyInfo(): Observable <TelsatInfo> {
    return this.http
                .get( this.footerUrl ) 
                .map(res => {
                  let doc =  res.json()[0]                  
                  return new TelsatInfo({
                    address: doc.address,
                    contact: doc.contact,
                    workHours: doc.workHours,
                    companyName: doc.companyName,
                    copyRight: doc.copyRight 
                  })
                })
                .catch(err => {
                  console.log(err)                 
                  alert("Error de comunicación, Code: #5")                 
                  return Observable.of<TelsatInfo>()
                })
  }

  private handleError(Error: any) {

  }
}
