/* CALL(), APPLY(), BIND()

-   These methods are used to invoke the function and explicitly set the value of 'this'
-   When we want 'this' keyword to be explicitly referring to some object , we use these methods.

Call():
-   It is used to invoke the function and explicitly set the value of 'this'. It takes individual arguments(separated by commas).

Apply():
-   It is used to invoke the function and explicitly set the value of 'this'. It takes a list of arguments(array-like).

Bind():
-   It binds the function and object together and assigns it to a new function.
-   This function can be invoked later.

Q. Difference b/w call() & bind()?
A. Call() invokes the function IMMEDIATELY and sets the value of 'this'.
Bind() returns a new function that can be invoked LATER.
*/



const student = {
    firstname : "Satyam" ,
    lastname: "Raj" ,
    printName: function(town , state ){
        console.log(this.firstname +" " + this.lastname + "from" + town + "," + state);
    }
};

student.printName("PatnaCity", "Bihar");   //Satyam


const student2 = {
    firstname : "Sandy" ,
    lastname: "Dalal"
};
//What if we want 'this' keyword to refer to student2?


//Call
student.printName.call(student2 , "Patnacity" , "Bihar");
//Sandy Dalal from Patnacity , Bihar




//Apply
student.printName.apply(student2 , ["PatnaCity", "Bihar"]);
//Sandy Dalal from PatnaCity , Bihar




//Bind
let printMyName = student.printName.bind(student2);
console.log(printMyName); //function()
printMyName("PatnaCity", "Bihar");
//Sandy Dalal from PatnaCity , Bihar








/*
const student = {
    firstname : "Satyam" ,
    lastname: "Raj" 
};

printName: function(town , state ){
        console.log(this.firstname +" " + this.lastname + "from" + town + "," + state);
    }

student.printName("Patna", "Bihar"); 
printName.call(student , "Patna" , "Bihar");




const student2 = {
    firstname : "Sandy" ,
    lastname: "Dalal"
};
//What if we want 'this' keyword to refer to student2?


student2.printName("Patna", "Bihar");
printName.call(student2 , "Patna" , "Bihar");



printName.apply(student2 , ["Patna", "Bihar"]);



let printMyName = printName.bind(student2);
console.log(printMyName);    //function()
printMyName("Patna", "Bihar");
*/