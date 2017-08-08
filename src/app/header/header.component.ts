import { Component, OnInit } from '@angular/core';
import { Button } from "app/classes/button";
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ServicesTelsat]
})
export class HeaderComponent {
  subscription: any;
  buttons: Button[];

  constructor(private buttonsInfo: ServicesTelsat) {
    this.getInfoHeaderButtons()
   }

  getInfoHeaderButtons(): void {
    this.subscription = this.buttonsInfo.getButtons()
        .subscribe(data => this.buttons = data)
  }

  ngOnDestroy() {
    if (this.subscription)  this.subscription.unsubscribe()
  }

}
