import { Sector } from './../../classes/sector';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SectorsService } from "app/services/sectors/sectors.service";

@Component({
  selector: 'sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss'],
})
export class SectorComponent implements OnInit {
  @Input('section')sector:any;
  @Output() clickId = new EventEmitter<string>();
  clase: string;
  flip: boolean = false;
  children: Sector[];

  send(): void {
    this.clickId.emit(this.sector.id)
  }

  constructor(private sectorsService: SectorsService) { }

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
      default:
      break;
    }

    this.getChildren()
  }

  toggle(): void {
    if (this.children) {
      this.flip = !this.flip  
    }else{
    }
    
  }
  
  getChildren(): void {
    this.sectorsService.getSectors(this.sector.id).then(data => {
      if (data.length>0){
        this.children = data;
      }
    });
  }

}
