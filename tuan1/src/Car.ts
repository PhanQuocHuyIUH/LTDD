export class Car {
    constructor(
        public brand: string,
        public model: string,
        public year: number
    ) {}

    public showInfo(): void {
        console.log(this);
    }
}