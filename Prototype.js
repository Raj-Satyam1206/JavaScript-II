/*  PROTOTYPE & PROTOTYPAL INHERITANCE 

Q.  What is a Prototype?

A.  Every object in JavaScript has a built-in property, which is called its prototype.

    The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.

    The chain ends when we reach a prototype that has null for its own prototype.

    Through this prototype, objects can have access to hidden properties and methods.
*/



/*
Q. How to access prototype of an object?

A.  All browsers use __proto__. 
    The standard way to access an object's prototype is the 
    Object.getPrototypeOf() method.
*/




/*

Q.  Are prototypes only associated with objects?

A.  No, Prototypes are also used in functions alongside objects.

Functions: In JavaScript, functions have a prototype property.  
    This property is used when the function is used as a constructor function to create objects (via new keyword). 
    The prototype is an object that holds methods and properties shared by all instances created by that function. 
*/






/*
Q.  How do we set the prototype?
A.  There are various ways of setting an object's prototype in JavaScript
    1. Object.create()
    2. Constructors 
*/


let arr = ["Satyam" , "Raj"];
console.log(arr.__proto__ === Array.prototype); // true

/*
    arr.__proto__ -> Array.prototype
    arr.__proto__.__proto__ -> Object.prototype
    arr.__proto__.__proto__.__proto__ -> null
    (Prototype of Object.prototype is null)
*/






/* PROTOTYPAL INHERITANCE 

    When one object inherits properties and methods from another object's prototype, it is called prototypal inheritance.
*/

let obj1 = {
    name : "Satyam",
    city : "Patna",
    getIntro : function(){
        console.log(`Hello, my name is ${this.name} and I am from ${this.city}`);
    }
}

let obj2 = {
    name : "Raj"
}


obj2.__proto__ = obj1;
//  We can access the obj2's prototype with obj2.__proto__
//  Object1 becomes the prototype for object2
//  Now obj2 can access obj1's properties and methods


console.log(obj1.getIntro());
console.log(obj2.getIntro()); // Hello, my name is Raj and I am from Patna



/*
    When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.
*/




let object = {
    name : "Satyam",
    city : "Patna",
    getIntro : function(){
        console.log(`Hello, my name is ${this.name} and I am from ${this.city}`);
    }
}

object.prototype.lastname = "Raj";
//  We can add a property to the prototype of an object with 
//  object.prototype.propertyName = value