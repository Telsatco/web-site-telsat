import { Sector } from './../../classes/sector';
import { sectors } from './../../data/data';
import { Injectable } from '@angular/core';

@Injectable()
export class SectorsService {

  constructor() { }

  getSectors(parent: string): Promise<Sector[]> {
    let filteredSectors = sectors.filter(el => el.parent === parent)
    return Promise.resolve(filteredSectors);
  }

  getParent(parentId: string): Promise<Sector[]> {
    let parent = sectors.find(el => el.id === parentId);
    return this.getSectors(parent.parent);
  }
}
