import { Button } from './../../classes/button';
import { headerButtons } from '../../data/data';
import { Injectable } from '@angular/core';

@Injectable()
export class ButtonsService {

  constructor() { }

  getButtons(): Promise<Button[]> {
    return Promise.resolve(headerButtons);
  }

}
