//Code with javascript combination with 
//Code with javascript combination in Typescript
console.log("This is my first typescript code.");
console.log("Addon code in typescript");
console.log("Addon code in typescript2--Breaktime");
//Datatype in type script:
var name1 = "Training is Up";
console.log(typeof (name1));
console.log(name1);
var number1 = 2;
var isTrue = true;
console.log(typeof (number1));
console.log(number1);
console.log(typeof (isTrue));
console.log(isTrue);
//Defining Array in typescript:
var myArr = ["amit", "Raymond", "yan", "mitul"];
console.log((typeof (myArr)));
console.log(myArr);
// defin
var myArray = ["Text", 3, 7.88];
console.log((typeof (myArray)));
console.log(myArray);
// Normal method , Parameters with datatypes. After the function braces, it is return type
function addValue(value1, value2) {
    console.log('addition of the values from this Fuction');
    return value1 + value2;
}
console.log(addValue(23, 43));
// optional parameter 
//optional parameter is representing by the ? 
function details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
details(12, "Nayan");
details(18, "Kumar", "nayan@gmail.com");
