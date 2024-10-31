import { Customer } from "./customer";

export class Bank {
  private customers: Customer[] = [];

  addCustomer(name: string, initialDeposit: number): Customer {
    const customer = new Customer(name, initialDeposit);
    this.customers.push(customer);
    return customer;
  }

  getTotalBalance(): number {
    return this.customers.reduce(
      (acc, customer) => acc + customer.getBalance(),
      0
    );
  }
}
