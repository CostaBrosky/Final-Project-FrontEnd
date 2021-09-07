import {ClientType} from "./clienttype.enum";

export class Client {
  id: number |undefined;
  businessName: string = "";
  vatNumber: string = "";
  email: string = "";
  insertionDate: Date = new Date();
  lastContactDate: Date = new Date();
  pec: string = "";
  phone: string = "";
  contactEmail: string = "";
  contactName: string = "";
  contactSurname: string = "";
  contactPhone: string = "";
  type: ClientType = ClientType.PA;

  constructor(id?: number, businessName: string = "", vatNumber: string = "", email: string = "", pec: string = "", phone: string = "", contactEmail: string = "",
              contactName: string = "", contactSurname: string = "", contactPhone: string = ""){
    this.id = id;
    this.businessName = businessName;
    this.vatNumber = vatNumber;
    this.email = email;
    this.pec = pec;
    this.phone = phone;
    this.contactEmail = contactEmail;
    this.contactName = contactName;
    this.contactSurname = contactSurname;
    this.contactPhone = contactPhone
  }
}
// @Enumerated(EnumType.STRING)
// private ClientType type;
//
// @OneToMany
// private List<Invoices> invoices = new ArrayList<>();
//
// @OneToOne
// private Address registeredOffice;
//
// @OneToOne
// private Address operationalHeadquarters;
