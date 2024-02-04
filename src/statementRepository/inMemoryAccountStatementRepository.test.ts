import {describe, expect} from "@jest/globals";
import {InMemoryAccountStatementRepository} from "./inMemoryAccountStatementRepository.ts";
import {StatementRepository} from "../interfaces/interfaces.ts";
import {Statement} from "../account/account.ts";

describe('inMemoryAccountStatementRepository', () => {
    it('should return an empty array if does not exist an statement', () => {
    //given
    const inMemoryAccountStatementRepository: StatementRepository = new InMemoryAccountStatementRepository()
    //when
    const findAll: Statement[] = inMemoryAccountStatementRepository.findAll()
    //then
    const result: [] = [];
    expect(findAll).toEqual(result)
    })
    it('should save an statement correctly and actualize the statementList', () => {
    //given
    const statement: Statement = {
        date: 12345,
        balance: 1100,
        amount: 100
    };
    const inMemoryAccountStatementRepository: StatementRepository = new InMemoryAccountStatementRepository();

    //when
    inMemoryAccountStatementRepository.save(statement);
    const findAll: Statement[] = inMemoryAccountStatementRepository.findAll();

    //then
    const result: Statement[] = [statement];
    expect(findAll).toEqual(result);
    })
    }
)