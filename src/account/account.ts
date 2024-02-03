export class Account {
    private _balance: number;
    accountNumber: number;
    private _clock: Clock;
    private _accountStatementRepository: StatementRepository;

    constructor(accountNumber: number, balance: number, clock: Clock, accountStatementRepository: StatementRepository) {
        this._balance = balance;
        this.accountNumber = accountNumber;
        this._clock = clock;
        this._accountStatementRepository = accountStatementRepository;
    }

    getBalance(): number {
        return this._balance
    }

    deposit(amount: number): void {
        const statement: Statement = {
            date: this._clock.now(),
            balance: amount + this._balance,
            amount
        }
        this._accountStatementRepository.save(statement)
    }

    withdraw(amount: number): void {
        const statement: Statement = {
            date: this._clock.now(),
            balance: this._balance - amount,
            amount: -amount
        }
        this._accountStatementRepository.save(statement)
    }

    printStatement(): Statement {
        return {
            date: this._clock.now(),
            balance: this.getBalance(),
            amount: 100
        }
    }
}

export type Statement = {
    date: number,
    balance: number,
    amount: number
}

export interface Clock {
    now: () => number
}

export interface StatementRepository {
    save: (statement) => void,
    findAll: () => Statement[]
}

export class InMemoryAccountStatementRepository implements StatementRepository {
    private statementList: Statement[];

    findAll(): Statement[] {
        return this.statementList
    }
    save(statement): void {
        const statementList: Statement[] = this.findAll();
        statementList.push(statement)
    }
}