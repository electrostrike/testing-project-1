// Sample test usage
// test('2 + 2 = 4', () => {
//    expect(2 + 2).toBe(4);
// })

const BankAccount = require('./bankAccount.js');

// test('Initialize a bank account', () => {
//     const myBankAccount = new BankAccount('Self', 100);
//     expect(myBankAccount).toBeDefined();
// })

test('Display balance with amount <= 0 and balance - amount >= 0', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.display(-100)).toBe(myBankAccount.balance);
})

test('Deposit money with amount > 0 and balance - amount >= 0', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.deposit(50)).toBe(150);
})

test('Withdraw money with amount > 0 and balance - amount < 0', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.withdraw(200)).toMatch(/Error/);
})
