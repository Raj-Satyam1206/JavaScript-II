
// REAL-LIFE USE CASES OF ASYNC/AWAIT Using Fetch()

async function fetchData(){

    try{
    const res = await fetch("");
    if(!res.ok){
        throw new Error("");
    }
    const data = await res.json()
    console.log(data);
    }


    catch (err){
        console.log(err);
    }
}




const promise = fetch("");
promise.then((response) => {
    if (!response.ok) {
        throw new Error("");
    }
    return response.json();
})
.then((data) => {
    console.log(data);
})




fetch().then(response => response.json()).then(data => console.log(data));

/* 
Working of Fetch()::
    fetch() returns a Response Object
    fetch() is an asynchronous task which returns a promise and promises are handled through 'await' keyword
    When the promise is resolved, it gives a Response object (returned from the server)
    This Response object has a body which is a readable stream which is converted into JSON format
    res.json() is itself an asynchronous operation which returns a promise
    When this promise is resolved, we get the result(data).
    Then we can access the data.
*/


//   ERROR HANDLING:: 

//1.

async function fetchData(){

    try{
    const res = await fetch("");
    if(!res.ok){
        throw new Error("");
    }
    const data = await res.json()
    console.log(data);
    }


    catch (err){
        console.log(err);
    }
}



//2.
async function fetchData(){
    const res = await fetch("");
    if(!res.ok){
        throw new Error("");
    }
    const data = await res.json()
    console.log(data);
}
fetchData().catch((err) => console.log(err));