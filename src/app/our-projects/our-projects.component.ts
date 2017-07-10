import { Project } from './../classes/project';
import { ClientsService } from './../services/clients/clients.service';
import { Component, OnInit } from '@angular/core';

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