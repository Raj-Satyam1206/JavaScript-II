/* PROMISES

Promises are a way to handle asynchronous functions.
With callback functions, we were getting into inversion of control.

Promises overcome this issue.
*/



/*
    Every asynchronous function/API call will return a promise which is resolved / rejected. 
    
    Based on this, promise executes the callback function.
    Promises give us the guarantee that the callback function will be executed atleast ONCE and the control remains with the developer/user 
*/

const pr = createOrder(cart);

/* 
    'createOrder' asynchronous function will return a promise.
    Here, 'pr' will act as a variable until this line executes.
    When the line executes, 'pr' will hold the promise in pending state returned by asynchronous function.

    Promise returned will be an object and will have a state and result.
    State can be :
        Pending: When the promise is created
        Fulfilled: When the promise is resolved.(success)
        Rejected: When the promise is rejected(failure of async task)

    Result will be the response / data returned by the async operation.  It can be error also.   
*/


const pro = createOrder(cart);
console.log(pro);

//  OUTPUT:
//  pr: Promise <pending>
//  PromiseState: pending
//  PromiseResult: undefined

/*
    'createOrder' API will return a promise and initially it will be an EMPTY OBJECT with pending as STATE and undefined as RESULT .

    When the promise is created, it will be in the pending state and after some time, when the response has been received from async operation, then STATE becomes 'fulfilled' / 'rejected' and RESULT changes to the response.

    The response from the async operation (resolve/ reject) comes into the promise after some time.

    When we have the response , we can attach a .then() or .catch()  to deal with further callback functions. The callback function attached with .then() will be automatically called once the promise gets the response. 



    Async operation returns a promise
    - This means that a promise is returned with a response , that is, with a resolve or reject function.
*/

const promise = createOrder(cart);
promise
  .then((response) =>{
     proceedToPayment(response);
  });

//   .catch((err) => {
//     console.error(err);
//   });


/*
Q.  What is a Promise?
A.  Promise is an object which represents the eventual completion or failure of an asynchronous operation.
*/





//PROMISE CHAINING::

createOrder(cart , function(orderId){
    proceedToPayment(orderId , function(paymentInfo){
        getSummary(paymentInfo , function(){
            updateWallet();
    });
});
});




createOrder(cart)  //returns a promise
.then(function(orderId){
    return proceedToPayment(orderId);  //returns a promise
})
.then(function(paymentInfo){
    return getSummary(paymentInfo);  //returns a promise
})
.then(function(){
    return updateWallet();
})