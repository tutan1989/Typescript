interface IPerson{
    firstName:string;
    lastName:string;

    sayHi:()=>string;
}

class PersonDemo implements IPerson{
    firstName:string;
    lastName:string;
    constructor(firstName:string, lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;


    }
    sayHi():string{
        return " "+ this.firstName +"  "+ this.lastName;
    }
}

let person = new PersonDemo("Nayan", "Kumar");
console.log(person.sayHi());