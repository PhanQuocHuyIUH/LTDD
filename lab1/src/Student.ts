import { Person } from "./Person";

export class Student extends Person {
    constructor(
        name: string,
        age: number,
        public grade: number   // thêm thuộc tính grade
    ) {
        super(name, age); // gọi constructor Person
    }

    public displayAllInfo(): void {
        console.log(this)
    }
}