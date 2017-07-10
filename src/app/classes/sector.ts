export class Sector {
  private _id: string;
  private _caption: string;
  private _parent: string;
  private _children: boolean;

  constructor({ id, caption, parent, children = false }) {
    this._caption = caption
    this._id = id
    this._children = children
    this._parent = parent
  }

  set caption (caption: string) {
    this._caption = caption
  }
  get caption () {
    return this._caption
  }

  set id (id: string) {
    this._id = id
  }
  get id () {
    return this._id
  }

  set parent (parent: string) {
    this._parent = parent
  }
  get parent () {
    return this._parent
  }

  set children (children: boolean) {
    this._children = children
  }
  get children () {
    return this._children
  }
}
