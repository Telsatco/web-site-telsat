export class Button {
  private _text: string;
  private _link: string;
  private _img: string;
  private _msg: string;

  constructor({ text, link, img, msg}){
    this._text = text
    this._link = link
    this._img = img
    this._msg = msg
  }

  set text (text: string) {
    this._text = text
  }
  get text () {
    return this._text
  }

  set img (img: string) {
    this._img = img
  }
  get img () {
    return this._img
  }

  set link (link: string) {
    this._link = link
  }
  get link () {
    return this._link
  }

  set msg (msg: string) {
    this._msg = msg
  }

  get msg () {
    return this._msg
  }

}
