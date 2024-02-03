export class Account {
    balance: number;
    accountNumber: number;
constructor(accountNumber: number, balance: number) {
    this.balance = balance;
    this.accountNumber = accountNumber;
}
deposit(amount: number): void {
    this.balance = amount + this.balance;
}
}