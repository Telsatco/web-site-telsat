import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-us-button',
  templateUrl: './contact-us-button.component.html',
  styleUrls: ['./contact-us-button.component.scss']
})
export class ContactUsButtonComponent implements OnInit {
  hover: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
