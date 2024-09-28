/* PROMISE APIs

- Promise APIs are used to make PARALLEL API calls
- When multiple API calls are made simultaneously or multiple async functions are getting executed at once, then we have some promise APIs to handle the promises returned by multiple API calls
- A set of promises are there which will be returned at defined intervals defined by setTimeout().
- We have taken three promises(three API calls) which settles(resolves/rejects) after 3s, 5s, 2s.
- These promise APIs returns a PROMISE.
*/

/* Promise.all()

- Takes an array of promises
- Returns a promise that resolves when ALL of the promises in the array have resolved
- waits for all the promises to finish
- That is when all the API calls are successfully completed, the promise.all() will return a promise.
- Either all resolves or NO output.
- If any of the promises in the array reject, we will get an error message immediately. It will not wait for other promises.
*/



/* Promise.allSettled()

- Takes an array of promises
- Waits for all the promises to get settled
- Returns a promise no matter the promises are resolved / rejected
- That is when all the promises returned by the API calls are settled, then promise.all() will return a promise.
- If any of the promises in the array reject, it will have error message alongside the resolved messages.
- SAFEST WAY
*/

/* Promise.race()

- Takes an array of promises
- Returns the result of FIRST SETTLED promise
- Returns a promise which gets settled the fastest(either resolved or rejected).
- If the first promise that gets settled is a reject, it will show the error message or if the first promise that gets settled is a resolve, it will show the success message
*/

/* Promise.any()

- Takes an array of promises and waits for first success
- Returns the FIRST SUCCESS promise
- Returns a promise which gets resolved/succeed the fastest(either resolved or rejected).
- If the first promise that gets settled is a reject, it will wait until we get a resolved promise or if the first promise that gets settled is a resolve, it will show the success message at first itself.

-If all the promises fail, we get an AGGREGATED ERROR, an array of errors returned by all promises
*/

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P1 Success");
    },3000);
})

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P2 Success");
        // reject("P2 fail");
    },1000);
})

const p3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P3 Success");
    },2000);
})


Promise.all([p1,p2,p3]) // either all reolves or error immediately 
 .then((res)=>console.log(res))
 .catch((err)=>console.error(err))

Promise.allSettled([p1,p2,p3]) //wait for all promises to get settled
 .then((res)=>console.log(res))
 .catch((err)=>console.error(err))
 
Promise.race([p1,p2,p3]) // returns first settled promise(fastest)
 .then((res)=>console.log(res))
 .catch((err)=>console.error(err))
 
Promise.any([p1,p2,p3]) // returns first success promise
 .then((res)=>console.log(res))
 .catch((err)=>console.error(err)) 

 