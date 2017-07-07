import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
   }

  ngAfterViewInit(){
    $("#navbarNav").removeClass("navbarNav-spy");
  }

}