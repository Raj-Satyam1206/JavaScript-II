/**
  ASYNC - AWAIT

WHAT?
- async/await are a modern way to handle Promises
- Promises can also be handled by .then() , .catch() methods 
- Promises can also lead to promise chaining 

NEED?
- async/await makes us perform an asynchronous function in a synchronous manner.   
*/

/*
Q. What is async?
A. Async is a keyword put before a function to make it an asynchronous function.
    'async' keyword converts a normal function into asynchronous function
    asynchronous functions ALWAYS return a promise
    
In this example::    
- Either async function will return a promise straight away
    return new Promise()
- Or even if it returns a value, the 'async' function will take this value and wrap it inside a promise and then return it.            
*/

async function getData(){
    // return new Promise()
    return "Hello World";
}

const dataPromise = getData();
console.log(dataPromise); //return a promise NOT value

dataPromise.then((res)=>console.log(res));


/* OUTPUT::
    Promise <fulfilled>

    PromiseState: fulfilled
    PromiseResult: Hello World

    Hello World
*/

/* 
- When we call the function , we will get a fulfilled promise with 'Hello Wrold' as result.
- If we want to get the exact data from promise , we will use a .then()
*/



/*

Q. What is await?
A. await is a keyword which is put before an asynchronous operation.
    'await' keyword is put before promises
    'await' keyword can ONLY be used inside an async functions
*/


// Handling PROMISES Traditional vs Modern way
//  TRADITIONAL  (promises .then())
const p = new Promise(function(resolve, reject){
    resolve("Promise resolved Value!!");
});

function getData(){
    p.then((res) => console.log(res));
}

getData();

//  MODERN (async/await)
const p = new Promise(function(resolve, reject){
    resolve("Promise resolved Value!!");
});

async function handlePromises(){
    const data = await p;
    console.log(data);
}
handlePromises();


