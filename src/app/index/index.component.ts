import { Component, OnInit } from '@angular/core';
import { Button } from "app/classes/button";
import { ButtonsService } from "app/services/buttons/buttons.service";

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
    this.buttonsService.getButtons()
    .then(data => this.buttons = data )
    .catch(() => alert("Error de comunicación, Code: #9"))
  }

  ngAfterViewInit(){
    document.getElementById("navbarNav").classList.add("navbarNav-spy")
  }

}
