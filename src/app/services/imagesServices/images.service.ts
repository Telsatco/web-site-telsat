import { Injectable } from '@angular/core';
import { philosOrg } from "app/data/data";
import { ImageInfo } from "app/classes/imageInfo";

@Injectable()
export class ImagesService {

  constructor() { }

  getPhilosOrg(): Promise <ImageInfo[]> {
    return Promise.resolve(philosOrg)
  }

}
