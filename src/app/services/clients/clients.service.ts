import { clients, providers } from './../../data/data';
import { Client } from './../../classes/client';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientsService {

  constructor() { }

  getClient(): Promise<Client[]> {
    return Promise.resolve(clients);
  }

  getProvider(): Promise<Client[]> {
    return Promise.resolve(providers);
  }

}