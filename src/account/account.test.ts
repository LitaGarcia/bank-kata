import {Account} from "./account.ts";

describe('account', () => {
    it('should deposit an amount in the balance of the account', () => {
        //given
        const accountNumber: number = 12317
        const balance: number = 1000;
        const amount: number = 100;

        //when
        const account: Account = new Account(accountNumber, balance);
        const deposit: void = account.deposit(amount)
        const getBalance: number = account._getBalance()

    //then
    expect(getBalance).toEqual(1100)
    })
    it('should get the balance of the account', () => {
    //given
        const accountNumber: number = 12317
        const balance: number = 1000;

        //when
        const account: Account = new Account(accountNumber, balance);
        const getBalance: number = account._getBalance()

        //then
        expect(getBalance).toEqual(1000)
    })
    it('should withdraw an amount of the current balance', () => {
        //given
        const accountNumber: number = 12317
        const balance: number = 1000;
        const amount: number = 100;

        //when
        const account: Account = new Account(accountNumber, balance);
        const withdraw: void = account.withdraw(amount)
        const getBalance: number = account._getBalance()

        //then
        expect(getBalance).toEqual(900)
    })
    }
)