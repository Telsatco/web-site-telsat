import { Button } from './../classes/button';
import { ButtonsService } from './../services/buttons/buttons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ButtonsService]
})
export class IndexComponent implements OnInit {

  buttons: Button[];

  constructor(private buttonsService: ButtonsService) { }

  ngOnInit() {
    this.getButtons();
  }

  getButtons(): void {
    this.buttonsService.getButtons().then(data => this.buttons = data )
  }

  ngAfterViewInit(){
    document.getElementById("navbarNav").classList.add("navbarNav-spy")
  }

}
