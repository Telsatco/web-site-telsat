import { Injectable } from '@angular/core';
import { Project } from "app/classes/project";
import { Client } from "app/classes/client";
import { clients, providers, projects, techDivisions } from "app/data/data";

@Injectable()
export class ClientsService {

  constructor() { }

  getClient(): Promise <Client[]> {
    return Promise.resolve(clients);
  }

  getProvider(): Promise <Client[]> {
    return Promise.resolve(providers);
  }

  getProjects(): Promise <Project[]> {
    return Promise.resolve(projects);
  }

  getTechDivisions(): Promise <Project[]> {
    return Promise.resolve(techDivisions);
  }

}