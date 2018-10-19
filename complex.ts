interface ComplexNumber {
    real: number;
    imaginary: number;
}

class Complex{
    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary: number){
        this.real = real;
        this.imaginary = imaginary;
    }

    get realValue(): number{
        return this.real;
    }

    get imaginaryValue(): number{
        return this.imaginary;
    }

    set realValue(realVal: number){
        this.real = realVal;
    }

    set imaginaryValue(imaginaryVal: number){
        this.imaginary = imaginaryVal;
    }

    addComplex(value1: Complex){
        this.realValue = this.real + value1.real;
        this.imaginaryValue = this.imaginary + value1.imaginary;
    }

    subtractComplex(value1: Complex){
        this.realValue = this.real - value1.real;
        this.imaginaryValue = this.imaginary - value1.imaginary;
    }

    moduleComplex(): number {
        return Math.sqrt(this.real*this.real + this.imaginary*this.imaginary);
    }

    printComplex(){
        console.log(this.real + " + " + this.imaginary + "j");
    }
}


let complex1 = new Complex(1,1);
let complex2 = new Complex(2,3);

complex1.addComplex(complex2);
complex1.printComplex();
complex1.subtractComplex(complex2);
complex1.printComplex();

// complex4.printComplex();
// console.log(complex2.moduleComplex());