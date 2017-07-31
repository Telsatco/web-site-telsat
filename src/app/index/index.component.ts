import { Component, OnInit } from '@angular/core';
import { Button } from "app/classes/button";
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ServicesTelsat]
})
export class IndexComponent implements OnInit {

  buttons: Button[];

  constructor(private buttonsInfo: ServicesTelsat) { }

  ngOnInit() {
    this.getButtons();
  }

  getButtons(): void {
    this.buttonsInfo.getButtons()
        .subscribe(data => this.buttons = data)
  }

  ngAfterViewInit(){
    document.getElementById("navbarNav").classList.add("navbarNav-spy")
  }

}
