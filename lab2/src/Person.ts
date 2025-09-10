export class Person {
    constructor(
        public name: string,
        public age: number
    ) {}

    public displayInfor(): void{
        console.log(this);
    }
}