import {Account, Clock, Statement, StatementRepository} from "./account.ts";

describe('account', () => {
    it('should printStatement list from the account', () => {
        //given
        const statementList: Statement[] = [{
            date: 12345,
            balance: 1100,
            amount: 100
        },
            {
                date: 12345,
                balance: 900,
                amount: -100
            }
        ];
        const mockClock: Clock = {
            now: jest.fn(() => 12345)
        };
        const mockAccountStatementRepository: StatementRepository = {
            findAll: jest.fn(() => statementList),
            save: jest.fn()
        }
        const spyAccountStatementRepository = jest.spyOn(mockAccountStatementRepository, 'findAll');
        const accountNumber: number = 12317;
        const balance: number = 1000;
        const account: Account = new Account(accountNumber, balance, mockClock, mockAccountStatementRepository);

        //when
        const printStatement: Statement[] = account.printStatement();

        //then
        expect(printStatement).toEqual(statementList)
    })
    it('should add an statement with the amount deposited in the repositoryStatement list', () => {
        //given
        const statement: Statement = {
            date: 12345,
            balance: 1100,
            amount: 100
        };
        const mockClock: Clock = {
            now: jest.fn(() => 12345)
        };
        const mockAccountStatementRepository: StatementRepository = {
            findAll: jest.fn(() => []),
            save: jest.fn()
        }
        const spyAccountStatementRepository = jest.spyOn(mockAccountStatementRepository, 'save')
        const accountNumber: number = 12317;
        const balance: number = 1000;
        const amount: number = 100;
        const account: Account = new Account(accountNumber, balance, mockClock, mockAccountStatementRepository);

        //when
        account.deposit(amount);

        //then
        expect(spyAccountStatementRepository).toHaveBeenCalledWith(statement)
    })
    it('should add an statement with the amount withdraw in the repositoryStatement list', () => {
        //given
        const statement: Statement = {
            date: 12345,
            balance: 900,
            amount: -100
        };
        const mockClock: Clock = {
            now: jest.fn(() => 12345)
        };
        const mockAccountStatementRepository: StatementRepository = {
            findAll: jest.fn(() => []),
            save: jest.fn()
        }
        const spyAccountStatementRepository = jest.spyOn(mockAccountStatementRepository, 'save')
        const accountNumber: number = 12317
        const balance: number = 1000;
        const amount: number = 100;
        const account: Account = new Account(accountNumber, balance, mockClock, mockAccountStatementRepository);

        //when
        account.withdraw(amount)

        //then
        expect(spyAccountStatementRepository).toHaveBeenCalledWith(statement)
    })
})