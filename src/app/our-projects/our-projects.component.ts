import { Component, OnInit } from '@angular/core';
import { Project } from "app/classes/project";
import { ServicesTelsat } from 'app/services/Telsat/Telsat.service';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss'],
  providers: [ServicesTelsat]
})
export class OurProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private infoProjects: ServicesTelsat) { }

  ngOnInit() {
    this.getDataProjects();
  }

  ngAfterViewInit(){
    document.getElementById("navbarNav").classList.remove("navbarNav-spy");
  }

  getDataProjects(): void {
    this.infoProjects.getProjects()
        .subscribe(data => this.projects = data)
  }
    

}