import { Component, OnInit } from '@angular/core';
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';
import { Project } from "app/classes/project";

@Component({
  selector: 'divisiones',
  templateUrl: './divisiones.component.html',
  styleUrls: ['./divisiones.component.scss'],
  providers: [ServicesTelsat]
})
export class DivisionesComponent {
  techDivisions: Project[];
  subscription : any;

  constructor( private ClientServices: ServicesTelsat) {
    this.getInfoTechDivisions()
   }

  getInfoTechDivisions(): void {
    this.subscription = this.ClientServices.getTechDivisions()
        .subscribe(data => this.techDivisions = data)
  }

  ngOnDestroy() {
    if (this.subscription)  this.subscription.unsubscribe()
  }
}
