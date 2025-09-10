export class BankAccount{
    constructor(
        public balance: number
    ){}

    deposit(): void{
        this.balance+=1000
    }
    withdraw(): void{
        this.balance-=1000
    }
}