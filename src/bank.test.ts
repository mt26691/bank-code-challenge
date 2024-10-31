import { Bank } from "./bank";
import { Manager } from "./manager";

describe("Banking System", () => {
  let bank: Bank;

  beforeEach(() => {
    bank = new Bank();
  });

  describe("Add Customer", () => {
    test("should add a customer and deposit initial amount", () => {
      const customer = bank.addCustomer("Alice", 100);
      expect(customer.getBalance()).toBe(100);
    });

    test("should allow the customer to get their current balance", () => {
      const customer = bank.addCustomer("Bob", 150);
      expect(customer.getBalance()).toBe(150);
    });
  });

  describe("Deposit Money", () => {
    test("should deposit money successfully", () => {
      const customer = bank.addCustomer("Bob", 100);
      customer.deposit(50);
      expect(customer.getBalance()).toBe(150);
    });

    test("should not deposit a negative amount", () => {
      const customer = bank.addCustomer("Bob", 100);
      expect(() => customer.deposit(-50)).toThrow(
        "Deposit amount must be greater than zero."
      );
    });

    test("should not deposit zero amount", () => {
      const customer = bank.addCustomer("Bob", 100);
      expect(() => customer.deposit(0)).toThrow(
        "Deposit amount must be greater than zero."
      );
    });
  });
  describe("Withdraw Money", () => {
    test("should withdraw money successfully", () => {
      const customer = bank.addCustomer("Bob", 200);
      customer.withdraw(50);
      expect(customer.getBalance()).toBe(150);
    });

    test("should not withdraw more than balance", () => {
      const customer = bank.addCustomer("Charlie", 50);
      expect(() => customer.withdraw(100)).toThrow("Insufficient funds.");
    });

    test("should not withdraw a negative amount", () => {
      const customer = bank.addCustomer("Charlie", 50);
      expect(() => customer.withdraw(-50)).toThrow(
        "Withdrawal amount must be greater than zero."
      );
    });

    test("should not withdraw zero amount", () => {
      const customer = bank.addCustomer("Charlie", 50);
      expect(() => customer.withdraw(0)).toThrow(
        "Withdrawal amount must be greater than zero."
      );
    });
  });

  describe("Transfer Money", () => {
    test("should transfer money successfully between customers", () => {
      const alice = bank.addCustomer("Alice", 300);
      const bob = bank.addCustomer("Bob", 100);
      alice.transfer(100, bob);
      expect(alice.getBalance()).toBe(200);
      expect(bob.getBalance()).toBe(200);
    });

    test("should not transfer more than available balance", () => {
      const alice = bank.addCustomer("Alice", 50);
      const bob = bank.addCustomer("Bob", 100);
      expect(() => alice.transfer(100, bob)).toThrow(
        "Insufficient funds to transfer."
      );
    });

    test("should not transfer negative amount", () => {
      const alice = bank.addCustomer("Alice", 300);
      const bob = bank.addCustomer("Bob", 100);
      expect(() => alice.transfer(-50, bob)).toThrow(
        "Transfer amount must be greater than zero."
      );
    });
  });

  describe("Total Bank Balance", () => {
    test("should allow the manager to view the total balance in the bank", () => {
      bank.addCustomer("Alice", 200);
      bank.addCustomer("Bob", 300);
      const manager = new Manager(bank);
      expect(manager.getTotalBalance()).toBe(500);
    });
  });
});
