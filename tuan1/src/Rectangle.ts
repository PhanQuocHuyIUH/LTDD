export class Rectangle{
    constructor(
        public width: number,
        public height: number
    ){}

    getArea(): number{
        return this.height*this.width
    }
    getPerimeter(): number{
        return 2*(this.height+this.width)
    }
}