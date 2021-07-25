var PersonDemo = /** @class */ (function () {
    function PersonDemo(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonDemo.prototype.sayHi = function () {
        return " " + this.firstName + "  " + this.lastName;
    };
    return PersonDemo;
}());
var person = new PersonDemo("Nayan", "Kumar");
console.log(person.sayHi());
