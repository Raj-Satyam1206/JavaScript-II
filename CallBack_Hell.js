/*  CALLBACKS 

    Good Part of Callback::
    Asynchronous functions exist because of callback functions.
    Making an API call, or executing a function after some delay is all possible because of callback functions.


    Bad Part of Callback::
    Callback Hell
    Inversion of Control
*/

// Suppose we are creating an E-Commerce app and we have a cart and access to some backend APIs. First we create and order and then proceed to payment side.

const cart = ["shoes","pants","kurtas"];


api.createOrder(cart); //returns an orderId
api.proceedToPayment(orderId);


// These APIs will be inter connected to each other . When the order is created in the database by the API'createOrder' it will return an orderId and then payment will be done for that order. So we will use callback functions as these are asynchronous functions and we can also show the inter connectivity.  


createOrder(cart , function(cart){
    proceedToPayment(orderId);
});

// Order is created by 'createOrder'API and then it will call the payments function . we can have further APIs to have the order summary and updating the wallet. We will again use callback functions. 

createOrder(cart , function(cart){
    proceedToPayment(orderId , function(orderId){
        getSummary(paymentInfo , function(paymentInfo){
            updateWallet(paymentInfo);
    });
});
});

/* 
    This kind of structure is also known as Pyramid Of Doom.

    It is the responsibility of 'createOrder' API to coreate an order and callback the function for payments.

    It is the responsibility of 'proceedtoPayments' API to complete it work and then callback the function to show the summary.

    This will lead to CALLBACK HELL.

Q. What is a Callback Hell?

A. When there is nesting of callback functions, it leads to callback hell. There is inter dependency of one callback function on another.
*/




api.createOrder(cart , function(cart){
    api.proceedToPayment(orderId);
});


/* INVERSION OF CONTROL 

- Inversion of control is losing the control of our code while using callback functions.

Here, the 'proceedToPayment' API is in the callback function of 'createOrder' API. That means the payments API will only be called when the Create API has created an order and calls the function back.

But , we don't know what's written inside 'createOrder' API 
- What if 'CreateOrder' API never calls the function back?
- What if 'CreateOrder' API calls the function back TWICE and payments is shown twice?

That means the CONTROL of calling the payments API is with the createOrder API and not the developer/user. 
*/

// This leads us to PROMISES.


