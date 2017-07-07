import { Router } from '@angular/router';
import { inject } from '@angular/core/testing';
import { Button } from './../../classes/button';
import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery';

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
  }   

  ngOnChanges(){
    this.currentLocation = window.location.pathname.slice(1)
  }
  
  @HostListener('click', ['$event']) onClick(e) {
    e.preventDefault();
    this.currentLocation = window.location.pathname.slice(1)
    $(".nav-link").removeClass("active");
    this.btn.forEach((el) => {
      if (el.link === this.currentLocation) {
        $(`#${el.text}`).addClass("active");
      }
    })
  }

  onWindowScroll(link: string) {
    this.router.navigate([`/${link}`]);
    $('html, body').scrollTop(0);      
  }
}