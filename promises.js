/*
PROMISE: promise is object it have 2 state resolve and reject it works only two states 
reject and resolve mean done or not now i take the example the of non technical as like 
i learn javascript and clear the interview then it show promise and it shows resolve on the
other hand i donot learn and not clear the interview it shows reject......
--------------ANOTHER EXAMPLE----------
now i have no money but i paid later it also show promise

now syntax

let promise = new Promise(function(resolve,reject){

//code to be executed

})


const promise = new Promise((resolve,reject)=>{
    console.log("abhishek")
    resolve();
    })//output it shows abhishek but in console we seen promise is fullfilled

const promise = new Promise((resolve,reject)=>{
    console.log("abhishek Rawat")
    reject(newError("Internal Server Error"))
})

it show the output is abhishek Rawat but show error  Uncaught (in promise) ReferenceError: newError is not defined
    at <anonymous>:3:5
    at new Promise (<anonymous>)
    at <anonymous>:1:18





*/

