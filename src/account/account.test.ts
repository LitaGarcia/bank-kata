import {Account} from "./account.ts";

describe('account', () => {
    it('should deposit an amount in the balance of the account', () => {
        //given
        const accountNumber: number = 12317
        const balance: number = 1000;
        const amount: number = 100;
        const account: Account = new Account(accountNumber, balance);

        //when
        account.deposit(amount)
        const currentBalance: number = account._getBalance()

        //then
        expect(currentBalance).toEqual(1100)
    })
    it('should get the balance of the account', () => {
    //given
        const accountNumber: number = 12317
        const balance: number = 1000;
        const account: Account = new Account(accountNumber, balance);

        //when
        const currentBalance: number = account._getBalance()

        //then
        expect(currentBalance).toEqual(1000)
    })
    it('should withdraw an amount of the current balance', () => {
        //given
        const accountNumber: number = 12317
        const balance: number = 1000;
        const amount: number = 100;
        const account: Account = new Account(accountNumber, balance);

        //when
        account.withdraw(amount)
        const currentBalance: number = account._getBalance()

        //then
        expect(currentBalance).toEqual(900)
    })
    it('should printStatement from the account', () => {
        //given
        const mockClock: Clock = {
            now: jest.fn(() => 12345)
        };
        const accountNumber: number = 12317;
        const balance: number = 1000;
        const account: Account = new Account(accountNumber, balance, mockClock);
        const currentBalance: number = account._getBalance();

        //when
        const printStatement: Statement = account.printStatement();

        //then
        expect(printStatement).toEqual({
            date: 12345,
            balance: currentBalance
        })
    }
)