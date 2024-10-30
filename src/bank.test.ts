import { Bank } from "./bank";
import { Manager } from "./manager";

describe("Banking System", () => {
  let bank: Bank;

  beforeEach(() => {
    bank = new Bank();
  });

  test("should add a customer and deposit initial amount", () => {
    const customer = bank.addCustomer("Alice", 100);
    expect(customer.getBalance()).toBe(100);
  });

  test("should deposit money", () => {
    const customer = bank.addCustomer("Bob", 100);
    customer.deposit(50);
    expect(customer.getBalance()).toBe(150);
  });

  test("should withdraw money", () => {
    const customer = bank.addCustomer("Bob", 200);
    customer.withdraw(50);
    expect(customer.getBalance()).toBe(150);
  });

  test("should not withdraw more than balance", () => {
    const customer = bank.addCustomer("Charlie", 50);
    expect(() => customer.withdraw(100)).toThrow("Insufficient funds.");
  });

  test("should transfer money between customers", () => {
    const alice = bank.addCustomer("Alice", 300);
    const bob = bank.addCustomer("Bob", 100);
    alice.transfer(100, bob);
    expect(alice.getBalance()).toBe(200);
    expect(bob.getBalance()).toBe(200);
  });

  test("should calculate total balance in the bank", () => {
    bank.addCustomer("Alice", 200);
    bank.addCustomer("Bob", 300);
    const manager = new Manager(bank);
    expect(manager.getTotalBalance()).toBe(500);
  });
});
