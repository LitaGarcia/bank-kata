export class Account {
    private _balance: number;
    accountNumber: number;

    constructor(accountNumber: number, balance: number) {
        this._balance = balance;
        this.accountNumber = accountNumber;
    }

    _getBalance(): number {
        return this._balance
    }

    deposit(amount: number): void {
        this._balance = amount + this._balance;
    }

    withdraw(amount: number): void {
        this._balance = this._balance - amount;
    }
}