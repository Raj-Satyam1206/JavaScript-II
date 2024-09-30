/* THIS KEYWORD::

-  The behavior of "this" keyword depends on the context, such as whether it's in a function, global space, or an arrow function.
*/

//1.
/* this IN GLOBAL SPACE::  
    - In the global space, the value of "this" is the global object, which can vary depending on the JavaScript runtime env(e.g., window in browsers, Global in Node.js).
*/

console.log(this); //returns the Global Object(window)




//2.
/* this INSIDE A FUNCTION::
    - Inside a function, the value of "this" can be undefined in strict mode or the global object in non-strict mode.
    - Actually non-strict mode also gives undefined but due to THIS SUBSTITUTION, undefined replaces with the global object.

Q. What is the value of 'this' keyword inside a function?
A. The value of 'this' keyword inside a function is undefined but due to 'this substitution' value of 'this' changes from undefined/null to Global Object in non-strict mode.     
*/

"use strict";
function fun(){
    console.log(this);    // STRICT MODE - undefined
}



function fun(){
    console.log(this);    // NON-STRICT MODE - Global Object
}
fun();

/* THIS SUBSTITUTION::
    - JavaScript uses a mechanism called "this substitution," where "this" is replaced with the global object when it's undefined or null in non-strict mode.
*/




//3.
/* this keyword value depends on how this is called */

"use strict";
function fun(){
    console.log(this);  
}

fun();         // undefined
window.fun();  //Global Object





//4.
/* this INSIDE AN OBJECT'S METHOD 
Q. Difference b/w function & method?

A. A method is a function as object's property. So methods are functions which are properties inside an object. 

Here, this refers to the object which invokes the function 'printName'.
*/

const obj = {
    name : "Satyam" ,
    printName : function(){
        console.log(this);
    } 
};

obj.printName();





//5.
/* this INSIDE ARROW FUNCTIONS
    - Normal functions have a 'this' binding: this refers to the object which invokes the function
    - Arrow functions do not have a 'this' binding
    - It retains the 'this' value of enclosing lexical context.
    - It retains the 'this' value of their lexical context in which they are enclosed.
*/

        //5.1
        const obj1 = {
            name : "Satyam" ,
            printName : () => {
                console.log(this);       //GLOBAL OBJECT
            } 
        };

        obj1.printName();
        //The enclosing lexical context of this is the global space
        //Lexcial context of arrow function is the obj{} which is enclosed in the global space
        //'this' value in global space = Global Object


        //5.2
        const obj2 = {
            name : "Satyam" ,
            printName : function x(){
                const y = () => {
                    console.log(this);       //obj2{name: printName:}
                } 
            }
        };

        obj2.printName();
        //The enclosing lexical context of this is the object 
        //Lexcial context of arrow function is the outer function x()which is enclosed in the object obj2{}
        //'this' value in obj2{} will be the object itself.



        
//6.
/* this INSIDE DOM::

- 'this' keyword can be written inside HTMl
<button onclick = "alert=(this)"> Click Me </button>
The 'this' keyword refers to the button element itself.
*/