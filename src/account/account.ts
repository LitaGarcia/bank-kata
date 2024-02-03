export class Account {
    private _balance: number;
    accountNumber: number;
    private _clock: Clock;

    constructor(accountNumber: number, balance: number, clock: Clock) {
        this._balance = balance;
        this.accountNumber = accountNumber;
        this._clock = clock;
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

    printStatement(): Statement {
        return {
            date: this._clock.now(),
            balance: this._getBalance()
        }
    }
}

export type Statement = {
    date: number,
    balance: number
}

export interface Clock {
    now: () => number
}