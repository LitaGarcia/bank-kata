# Banking kata

This repo is based on the last exercise shown in the [TDD Manifesto](http://https://tddmanifesto.com/exercises/ "TDD Manifesto") website in order to create a bank with an Account that allows deposit and withdraw an amount and also print the statements.

### Technologies used

You can find the dependencies  in the package.json and also the scripts used.

- Typescript v5.3.3
- Jest v29.7.0
- Node v20.11.0


> Note: This template has been created by myself using jest as testing framework for the first time. Any comments for improvement or links are greatly appreciated!

### How to use this app

The code of this kata has been deployed following TDD so there are not any script to start/run the application, in order to test I really encourage to execute:

`npm run test`

And also don't forget to install all dependencies found in the package.json file.

`npm install`

### Overview

- *InMemoryAccountStatemetsRepository* has been implemented base on an interface that would allow to create different storage implementations.
- I used Jest as first time and allows me an easy way to create an app with babel.
- *Clock* is injected as an interface that allows to mock the `now()`method in order to prevent error with the time executed in test.
- I have tried to reflect the RED-GREEN-REFACTOR cycle in the commits.
- *Account* methods were limited to three as indicated in the TDD Manifesto kata.

### Proposed Improvements

1. Commit Cycle Oversight:

While performing the commits, I was making sure of the cycle I was following and at the moment of redistributing the classes in their corresponding fields, I realized a serious mistake. *Clock* and *InMemoryAccountStatementsRepository* were created before creating their own tests in order to cover the needs of the corresponding Account tests.

> However, at the time of covering them, I thought of a simple but new use case: return an empty array if there were no statements for the Account class to handle that value in the future as desired. This new feature was again applied following TDD.

2. Expand Functionality: 

This kata has been limited to the rules provided in the TDD manifesto mentioned above.

### Documentation

I have attached the most useful links to documentation I used for the kata.

- How to create mocks in the best way with Jest: 

  https://devblogs.microsoft.com/ise/jest-mocking-best-practices/
- Solving dudes about mockImplementation in Jest: 

  https://stackoverflow.com/questions/69261729/jest-whats-the-diff-between-jest-fn-and-jest-fn-mockimplementation
  https://jestjs.io/docs/mock-function-api

- Understating TS v5 and bundlers: 

  https://dev.to/ayc0/typescript-50-new-mode-bundler-esm-1jic
- How to parametrize tests with Jest: 

  https://medium.com/@Klaymant/parameterized-tests-with-typescript-jest-19f45a4a2925
- What is TDD and practice with katas: 
  
  https://tddmanifesto.com/
  https://softwarecrafters.io/javascript/tdd-test-driven-development
  https://www.codewars.com/

- Another random questions:

  https://chat.openai.com/
