import { Component, OnInit } from '@angular/core';
import { ClientsService } from "app/services/clients/clients.service";
import { Project } from "app/classes/project";

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss'],
  providers: [ClientsService]
})
export class OurProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.getProjects();
  }

  ngAfterViewInit(){
    document.getElementById("navbarNav").classList.remove("navbarNav-spy");
  }

  getProjects(): void {
    this.clientsService
      .getProjects()
      .then((data) => this.projects = data)
      .catch(() => alert("El servidor no responde"))
  }

}