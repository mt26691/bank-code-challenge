export class Customer {
  private name: string;
  private balance: number;

  constructor(name: string, initialDeposit: number) {
    if (initialDeposit < 0) {
      throw new Error("Initial deposit must be a positive value.");
    }
    this.name = name;
    this.balance = initialDeposit;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient funds.");
    }
    this.balance -= amount;
  }

  transfer(amount: number, recipient: Customer): void {
    if (amount > this.balance) {
      throw new Error("Insufficient funds to transfer.");
    }
    this.withdraw(amount);
    recipient.deposit(amount);
  }

  getBalance(): number {
    return this.balance;
  }

  getName(): string {
    return this.name;
  }
}
