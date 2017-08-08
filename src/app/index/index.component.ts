import { Component, OnInit } from '@angular/core';
import { Button } from "app/classes/button";
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ServicesTelsat]
})
export class IndexComponent {
  subscription: any;
  buttons: Button[];

  constructor(private buttonsInfo: ServicesTelsat) {
    this.getInfoIndexButtons()
   }

  getInfoIndexButtons(): void {
    this.subscription = this.buttonsInfo.getButtons()
        .subscribe(data => this.buttons = data)
  }
      
  ngOnDestroy() {
    if (this.subscription)  this.subscription.unsubscribe()
  }

  ngAfterViewInit(){
    document.getElementById("navbarNav").classList.add("navbarNav-spy")
  }

}
