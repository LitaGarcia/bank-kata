import {Statement} from "../account/account";
import {StatementRepository} from "../interfaces/interfaces";

export class InMemoryAccountStatementRepository implements StatementRepository {
    private statementList: Statement[] = [];

    findAll(): Statement[] {
        return this.statementList
    }
    save(statement: Statement): void {
        const statementList: Statement[] | string = this.findAll();
        statementList.push(statement)
    }
}