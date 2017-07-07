import { Project } from './../../classes/project';
import { clients, providers, projects } from './../../data/data';
import { Client } from './../../classes/client';
import { Injectable } from '@angular/core';

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

}