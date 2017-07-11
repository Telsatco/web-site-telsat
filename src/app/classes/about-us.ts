export class AboutUs {
  private _title: string;
  private _info: string;

  constructor({ title, info }){
    this._info = info
    this._title = title
  }

  set title (title: string) {
    this._title = title
  }
  get title () {
    return this._title
  }

  set info (info: string) {
    this._info = info
  }
  get info () {
    return this._info
  }

}
