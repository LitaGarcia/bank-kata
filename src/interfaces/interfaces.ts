import {Statement} from "../account/account.ts";

export interface Clock {
    now: () => number
}

export interface StatementRepository {
    save: (statement) => void,
    findAll: () => Statement[]
}