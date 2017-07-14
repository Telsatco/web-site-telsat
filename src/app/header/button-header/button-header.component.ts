import { Router } from '@angular/router';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Button } from "app/classes/button";
import * as $ from 'jquery';

@Component({
  selector: 'button-header',
  templateUrl: './button-header.component.html',
  styleUrls: ['./button-header.component.scss']
})
export class ButtonHeaderComponent implements OnInit {

  @Input('buttons') btn: Button[];

  constructor( private router: Router ) {  }

  ngOnInit() { }   
  
  @HostListener('click', ['$event']) onClick(e) {
    e.preventDefault()
    $(".nav-link").removeClass("active")
    let location = window.location.pathname
    this.btn.forEach((el) => {		
      if (location.search(el.link) !== -1) {		
        document.getElementById(`${el.text}`).classList.add("active")		
      }		
    })
  }
  

  onWindowScroll(link: string) {
    $("html, body").scrollTop(0)
    this.router.navigate([`/${link}`])
  }

  verifyActivate(link: string): boolean {
    let location = window.location.pathname
    if (location.search(link) === -1)
      return false
    else
      return true
  }
}