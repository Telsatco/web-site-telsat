export class Project {
  private _image: string;
  private _title: string;
  private _description: string;

  constructor({ img, title, desc }){
    this._image = img
    this._title = title
    this._description = desc
  }

  set image (img: string) {
    this._image = img
  }
  get image () {
    return this._image
  }

  set title (title: string) {
    this._title = title
  }
  get title () {
    return this._title
  }

  set description (desc: string) {
    this._description = desc
  }
  get description () {
    return this._description
  }
}
