import { Bank } from "./bank";
import { Customer } from "./customer";

export class Manager {
  private bank: Bank;

  constructor(bank: Bank) {
    this.bank = bank;
  }

  getTotalBalance(): number {
    return this.bank.getTotalBalance();
  }

  findCustomerByName(name: string): Customer | undefined {
    return this.bank.findCustomerByName(name);
  }
}
