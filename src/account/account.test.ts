import {Account, Statement} from "./account";
import {beforeEach} from "@jest/globals";
import {Clock, StatementRepository} from "../interfaces/interfaces";

describe('account', () => {
    let mockClock: Clock;
    let mockAccountStatementRepository: StatementRepository;
    let account: Account;
    const accountNumber: number = 12317;
    const balance: number = 1000;
    const mockFindAll = jest.fn((): Statement[] => []);
    const mockSave = jest.fn();
    const mockNow = jest.fn((): number => 12345)

    beforeEach(() => {
        mockClock = {
            now: mockNow
        };
        mockAccountStatementRepository = {
            findAll: mockFindAll,
            save: mockSave
        };
        account = new Account(accountNumber, balance, mockClock, mockAccountStatementRepository);
    });

    afterEach(()=> {
        jest.clearAllMocks();
    })

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
        jest.spyOn(mockAccountStatementRepository, 'findAll').mockReturnValue(statementList);

        //when
        const printStatement: Statement[] = account.printStatement();

        //then
        expect(printStatement).toEqual(statementList)
    })
    it('should add an statement with the amount deposited in the repositoryStatement list', () => {
        //given
        const spyAccountStatementRepository = jest.spyOn(mockAccountStatementRepository, 'save')
        const amount: number = 100;

        //when
        account.deposit(amount);

        //then
        const statement: Statement = {
            date: 12345,
            balance: 1100,
            amount: 100
        };
        expect(spyAccountStatementRepository).toHaveBeenCalledWith(statement)
    })
    it('should add an statement with the amount withdraw in the repositoryStatement list', () => {
        //given
        const spyAccountStatementRepository = jest.spyOn(mockAccountStatementRepository, 'save')
        const amount: number = 100;

        //when
        account.withdraw(amount)

        //then
        const statement: Statement = {
            date: 12345,
            balance: 900,
            amount: -100
        };
        expect(spyAccountStatementRepository).toHaveBeenCalledWith(statement)
    })
})