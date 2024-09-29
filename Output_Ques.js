
// Traditional vs Modern



// Guess the output::

//1.
const p = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise resolved Value!!");
    },10000);
});

function getData(){
    //JS Engine will not wait for 10s for promise to be resolved
    p.then((res) => console.log(res));
    console.log("Hello");
}
getData();

/* 
OUTPUT::
    Hello
    Promise resolved Value(after 10s)


-   'promise' will take 10s to get resolved.
-   When 'getData()' gets inside the call stack, JS will immediately execute "Hello" and then wait for 10s for promise to get resolved. 
-   "Hello" -> "Promise"
*/


//2.
const p = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise resolved Value!!");
    },10000);
});

async function getData(){
    // p.then((res) => console.log(res));
    // JS Engine will wait for 10s for promise to be resolved
    const val = await p;
    
    console.log("Hello");
    console.log(val);
}
getData();

/*
OUTPUT::
After 10s,
    Hello
    Promise resolved Value 


-   'await' keyword stops the execution of the function until the Promise is settled
-   'getData()' will get into the call stack, but when the 'await' keyword is executed, then the function 'getData()' will be TEMPORARILY taken out of the call stack until the promise is settled.
-    After the promise is settled, the function 'getData()' moves back into the call stack and starts execution from where it had stopped.

-JS Engine does not wait for the promise to be resolved. If it would wait, it is blocking the call stack(main thread). So, the function moves out of the call stack for that time and the main thread is free.

-   It will print "Hello" -> "Promise" but after an interval of 10s.
-   For 10s , 'await' keyword will stop the execution of the function.
*/




//3.
const p = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise resolved Value!!");
    },10000);
});

async function getData(){
    const val1 = await p;
    console.log("Hello");
    console.log(val1);

    const val2 = await p;
    console.log("Hello");
    console.log(val2);
}
getData();

/*
OUTPUT::
After 10s,
    Hello
    Promise resolved Value!!
    Hello
    Promise resolved Value!!
*/




//4.
const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise resolved Value!!");
    },10000);
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise resolved Value!!");
    },5000);
});

async function getData(){

    const val1 = await p1;
    console.log("Hello");
    console.log(val1);

    const val2 = await p2;
    console.log("Hello");
    console.log(val2);
}
getData();

/* 
OUTPUT::
After 10s,
    Hello
    Promise Resolved
    Hello
    Promise Resolved

p2 will be resolved in 5s and is ready to be executed but cannot execute until p1 resolves as JS is synchronous and single-threaded

By the time p1 resolves, getData() will be out of call stack.
As soon as p1 resolves, getData() comes back into the call stack and starts execution.
By this time 10s , p2 has already resolved and is ready to be executed.
So after 10s, both the promises will be executed straight away. 
*/



//5.
const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise resolved Value!!");
    },5000);
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise resolved Value!!");
    },10000);
});

async function getData(){
    const val1 = await p1;
    console.log("Hello");
    console.log(val1);

    const val2 = await p2;
    console.log("Hello");
    console.log(val2);
}
getData();


/* 
OUTPUT::
After 5s,
    Hello
    Promise Resolved
After 5s,    
    Hello
    Promise Resolved
*/


