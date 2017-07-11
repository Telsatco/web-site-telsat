import { Injectable } from '@angular/core';
import { misionVision, values } from "app/data/data";
import { AboutUs } from "app/classes/about-us";

@Injectable()
export class MisionVisionService {

  constructor() { }

  getMisionVision(): Promise <AboutUs[]> {
    return Promise.resolve(misionVision);
  }

  getValues(): Promise <AboutUs[]> {
    return Promise.resolve(values);
  }

}
