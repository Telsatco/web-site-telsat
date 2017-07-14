import { Component, OnInit } from '@angular/core';
import { Button } from "app/classes/button";
import { ButtonsService } from "app/services/buttons/buttons.service";

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
        .catch(() => alert("Error de comunicación, code: #8"))
  }

}
