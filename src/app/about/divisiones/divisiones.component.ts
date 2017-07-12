import { providers } from 'app/data/data';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from "app/services/clients/clients.service";
import { Project } from "app/classes/project";

@Component({
  selector: 'divisiones',
  templateUrl: './divisiones.component.html',
  styleUrls: ['./divisiones.component.scss'],
  providers: [ClientsService]
})
export class DivisionesComponent implements OnInit {
  techDivisions: Project[];

  constructor( private ClientServices: ClientsService) { }

  ngOnInit() {
    this.getTechDivisions()
  }

  getTechDivisions(): void {
    this.ClientServices.getTechDivisions()
      .then(data => this.techDivisions = data)
      .catch(() => alert("Error de consulta"))
  }

}
