
// When we are using multiple .then(), we need to make sure that we are RETURNING things down the chain.

const promise = createOrder(cart);
promise
  .then((orderId) =>{
     console.log(orderId);
     return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.error(err.message);
  })

// Every CATCH will only catch the errors which have happened above it.  


// We know that 'createOrder' function will return a promise.
// Now, we will see how does it create and return a promise?
// CREATING A PROMISE::


function createOrder(cart){
    // We will use 'Promise' constructor to create a promise.
    const pr = new Promise(function(resolve, reject){

        // Validate cart
        // If cart is not valid, we will reject the promise with an error.
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // If cart is valid, we will resolve the promise with the order.
        const orderId = 12345;

        if(orderId){
        resolve(orderId);
        }

        // if(orderId){
        //     setTimeout(function(){
        //         resolve(orderId);
        //     },3000);
        // }
    });

    return pr;
}

function proceedToPayment(orderId){
    return new promise(function(resolve, reject){
        resolve("Payment successfull");
    })
}

function validateCart(cart){
    return true;
}



//ERROR HANDLING:: 
//For error handling, we use a .catch() method which deals with the reject message