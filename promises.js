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



-----------------new example ---------------
let promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
    resolve("promise fulfilled")
    }
    else
    {
    reject("promise is not fulfilled")
    }
    })


    -----------------example with then and catch 
   let hello = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("promise fulfilled");
    } else {
        reject("promise is not fulfilled");
    }
});

hello.then((result) => {
    console.log(result); 
}).catch((error) => {
    console.log(error); 
}).finally((message )=>{
    console.log("i am always run ")
    })

//promise fulfilled is output in this .then work with resolve and
.catch is work with the reject and one left .finally work is not dependent either run or not
it run always one thing is that promise chaining means .then ke andar.then nested .then



In promises we also use of async and await to write code clean and eaisly fid debugging 
as like  async is used to handle tasks and await is used to handle task like when this line 
is not excuted then it does not move to next line await like wait for the complete task as 
like syncronous 


*/

