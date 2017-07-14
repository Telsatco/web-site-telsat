import { Router } from '@angular/router';
import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery';
import { Button } from "app/classes/button";

@Component({
  selector: 'index-section',
  templateUrl: './index-section.component.html',
  styleUrls: ['./index-section.component.scss']
})
export class IndexSectionComponent implements OnInit {
  @Input() section: Button;
  @Input('index') index: number;
  side: number;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }
  
  ngOnInit() {
    switch (this.index) {
      case 0:
        this.side = 0;
        break;

      default:
        if ((this.index % 2) === 0) {
          this.side = 1;
        } else {
          this.side = 2;
        }
    }
  }
  
  goTo(): void {
    this.router.navigate([`/${this.section.link}`])
    $(".nav-link").removeClass("active")
    document.getElementById(`${this.section.text}`).classList.add("active")
    document.querySelector('html, body').scrollTop = 0;
  }

  @HostListener('click', ['$event']) onClick(e) {
    e.preventDefault();
  }

  onWindowScroll() {   
    $('html, body').animate({
      scrollTop: $('#nosotros').offset().top -95
    }, 'slow')
  }

}
