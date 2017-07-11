export class ImageInfo {
  private _img: string;
  private _title: string;

  constructor({ img, title }) {
    this._img = img
    this._title = title
  }

  set img (img: string) {
    this._img = img
  }
  get img () {
    return this._img
  }

  set title (title: string) {
    this._title = title
  }
  get title () {
    return this._title
  }
}
