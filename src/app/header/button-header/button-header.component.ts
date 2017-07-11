import { Router } from '@angular/router';
import { inject } from '@angular/core/testing';
import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery';
import { Button } from "app/classes/button";

@Component({
  selector: 'button-header',
  templateUrl: './button-header.component.html',
  styleUrls: ['./button-header.component.scss']
})
export class ButtonHeaderComponent implements OnInit {

  @Input('buttons') btn: Button[];
  currentLocation: string;

  constructor(
    @Inject(DOCUMENT) private document: Document, 
    private router: Router) { }

  ngOnInit() {
    this.currentLocation = window.location.pathname.slice(1)
  }   
  
  @HostListener('click', ['$event']) onClick(e) {
    e.preventDefault();
    this.currentLocation = window.location.pathname.slice(1)
    $(".nav-link").removeClass("active");
    this.btn.forEach((el) => {
      if (el.link === this.currentLocation) {
        document.getElementById(`${el.text}`).classList.add("active");
      }
    })
  }

  onWindowScroll(link: string) {
    this.router.navigate([`/${link}`]);
    document.querySelector("html, body").scrollTop = 0
  }
}