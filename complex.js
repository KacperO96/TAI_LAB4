"use strict";
var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Object.defineProperty(Complex.prototype, "realValue", {
        get: function () {
            return this.real;
        },
        set: function (realVal) {
            this.real = realVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Complex.prototype, "imaginaryValue", {
        get: function () {
            return this.imaginary;
        },
        set: function (imaginaryVal) {
            this.imaginary = imaginaryVal;
        },
        enumerable: true,
        configurable: true
    });
    Complex.prototype.addComplex = function (value1) {
        this.realValue = this.real + value1.real;
        this.imaginaryValue = this.imaginary + value1.imaginary;
    };
    Complex.prototype.subtractComplex = function (value1) {
        this.realValue = this.real - value1.real;
        this.imaginaryValue = this.imaginary - value1.imaginary;
    };
    Complex.prototype.moduleComplex = function () {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    };
    Complex.prototype.printComplex = function () {
        console.log(this.real + " + " + this.imaginary + "j");
    };
    return Complex;
}());
var complex1 = new Complex(1, 1);
var complex2 = new Complex(2, 3);
complex1.addComplex(complex2);
complex1.printComplex();
complex1.subtractComplex(complex2);
complex1.printComplex();
// complex4.printComplex();
// console.log(complex2.moduleComplex());
