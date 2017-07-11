import { Injectable } from '@angular/core';
import { Button } from "app/classes/button";
import { headerButtons } from "app/data/data";

@Injectable()
export class ButtonsService {

  constructor() { }

  getButtons(): Promise<Button[]> {
    return Promise.resolve(headerButtons);
  }

}
