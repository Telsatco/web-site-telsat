import { Component, OnInit } from '@angular/core';
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';
import { Project } from "app/classes/project";

@Component({
  selector: 'divisiones',
  templateUrl: './divisiones.component.html',
  styleUrls: ['./divisiones.component.scss'],
  providers: [ServicesTelsat]
})
export class DivisionesComponent implements OnInit {
  techDivisions: Project[];

  constructor( private ClientServices: ServicesTelsat) { }

  ngOnInit() {
    this.getInfoTechDivisions()
  }

  getInfoTechDivisions(): void {
    this.ClientServices.getTechDivisions()
        .subscribe(data => this.techDivisions = data)
  }

}
