import {Statement} from "../account/account.ts";
import {StatementRepository} from "../interfaces/interfaces.ts";

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