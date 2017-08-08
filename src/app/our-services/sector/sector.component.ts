import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';
import { Sector } from "app/classes/sector";

@Component({
  selector: 'sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss'],
  providers: [ ServicesTelsat ]
})
export class SectorComponent implements OnInit {
  @Input('section')sector:any;
  @Output() clickId = new EventEmitter<string>();
  clase: string;
  flip: boolean = false;
  children: Sector[];
  subscription: any;

  send(): void {
    this.clickId.emit(this.sector.id)
  }

  constructor(private sectorsService: ServicesTelsat) { }

  ngOnInit() {
    switch (this.sector.id) {
      case '0':
        this.clase = "phone";
      break;
      case '5':
        this.clase = "shield";
      break;
      case '63':
        this.clase = "plane";
      break;
      case '84':
        this.clase = "flask";
      break;
      case '92':
        this.clase = "cogs";
      break;
      case '101':
        this.clase = "lightbulb-o";
      break;
    }

    this.getChildren()
  }

  toggle(): void {
    if (this.children) {
      this.flip = !this.flip  
    }
  }
  
  getChildren(): void {
    this.subscription = this.sectorsService.getSectors(this.sector.id)
        .subscribe(data => {
          if (data.length>0){
            this.children = data;
          }
        })
  }

  ngOnDestroy() {
    if (this.subscription)  this.subscription.unsubscribe()
  }

}
