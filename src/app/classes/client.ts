export class Client {
  private _company: string;
  private _link: string;
  private _size: {x: string , y: string };

  constructor( { company, link, size = { x:'200', y:'200' } } ){
    this._company = company
    this._link = link
    this._size = size
  }

  set company (company: string) {
    this._company = company
  }
  get company () {
    return this._company
  }

  set link (link: string) {
    this._link = link
  }
  get link () {
    return this._link
  }

  set size (size) {
    this._size = size
  }
  get size () {
    return this._size
  }
  
}
