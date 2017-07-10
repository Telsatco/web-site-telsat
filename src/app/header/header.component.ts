import { Button } from './../classes/button';
import { ButtonsService } from './../services/buttons/buttons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ButtonsService]
})
export class HeaderComponent implements OnInit {

  buttons: Button[];

  constructor(private buttonsService: ButtonsService) { }

  ngOnInit() {
    this.getButtons();
  }

  getButtons(): void {
    this.buttonsService.getButtons()
        .then(data => this.buttons = data )
  }

}
