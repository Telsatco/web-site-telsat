import { Router } from '@angular/router';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Button } from "app/classes/button";

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
  }

  onWindowScroll(link: string) {
    document.querySelector("html, body").scrollTop = 0
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