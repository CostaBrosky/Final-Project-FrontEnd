export class Invoices {
  id: number | undefined;
  userId: number | undefined;
  clientId: number | undefined;
  year: number | undefined;
  date: Date = new Date();
  amount: number | undefined;
  number: number | undefined;

  constructor(userId?: number, clientId?: number, year?: number, amount?: number, number?: number) {
    this.userId = userId;
    this.clientId = clientId;
    this.year = year;
    this.amount = amount;
    this.number = number;
  }
}

