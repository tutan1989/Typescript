//Code with javascript combination with 
//Code with javascript combination in Typescript
console.log("This is my first typescript code.");
console.log("Addon code in typescript");
console.log("Addon code in typescript2--Breaktime");

//Datatype in Typescript:

let name1:string = "Training is Up";
console.log(typeof(name1));
console.log(name1);

let number1:number=2;
let isTrue:boolean=true;
console.log(typeof(number1));
console.log(number1);
console.log(typeof(isTrue));
console.log(isTrue);

//Defining Array in typescript:

let myArr:string[]=["amit","Raymond","yan","mitul"];
console.log((typeof(myArr)));
console.log(myArr);

// defin
let myArray:any[] = ["Text", 3, 7.88];
console.log((typeof(myArray)));
console.log(myArray);


// Normal method , Parameters with datatypes. After the function braces, it is return type
function addValue(value1:number,value2:number):number{

    console.log('addition of the values from this Fuction');
 
     return value1 + value2;
 }

 console.log(addValue(23,43));

    // optional parameter 
    
    //optional parameter is representing by the ? 

function details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 

 }
 details(12, "Nayan");
 details(18, "Kumar", "nayan@gmail.com");