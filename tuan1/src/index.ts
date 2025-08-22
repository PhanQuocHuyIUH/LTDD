import { BankAccount } from "./BankAccount";
import { Car } from "./Car";
import { Person } from "./Person";
import { Rectangle } from "./Rectangle";
import { Student } from "./Student";

let p = new Person("Huy", 21);
// p.displayInfor();

let s = new Student(p.name, p.age, 9.9)
// s.displayAllInfo()

let car1 = new Car("IUH", "IUH1", 2025);
// car1.showInfo(); 

let r = new Rectangle(1,2)
// console.log(r.getArea());
// console.log(r.getPerimeter());

let b = new BankAccount(5000)
b.withdraw()
console.log(b);

