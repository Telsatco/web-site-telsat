export class TelsatInfo {

  private _address: {
    title: string,
    local: string,
    city: string
  };
  private _contact: {
    title: string,
    phone: {
      title: string,
      phone: string,
    },
    fax: {
      title: string,
      phone: string
    },
    email: {
      title: string,
      email: string
    }
  };
  _workHours: {
      title: string,
      week: string,
      weekend: string
  };
  _companyName: string;
  _copyRight: string;


  constructor({ 
    address,
    contact, 
    workHours, 
    companyName, 
    copyRight }) {
      this._address = address
      this._contact = contact
      this._workHours = workHours
      this._companyName = companyName
      this._copyRight = copyRight
  }

  get addresTitle() { return this._address.title }
  get addresLocal() { return this._address.local }
  get addresCity() { return this._address.city }

  get contactTitle() { return this._contact.title }
  get contactPhoneTitle() { return this._contact.phone.title }
  get contactPhone2() { return this._contact.phone.phone }
  get contactFaxTitle() { return this._contact.fax.title }
  get contactFaxPhone() { return this._contact.fax.phone }
  get emailTitle() { return this._contact.email.title }
  get email2() { return this._contact.email.email }

  get hoursTitle() { return this._workHours.title }
  get hoursWeek() { return this._workHours.week }
  get hoursWeekend() { return this._workHours.weekend }

  get companyName() { return this._companyName }
  get copyRight() { return this._copyRight }
}
