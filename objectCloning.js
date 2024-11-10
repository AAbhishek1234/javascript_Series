/*
Cloning a JavaScript object is a task that is used mostly because we do
 not want to create the same object if the same object already exists.


 we have here two methods to solve this problem 
 1.Spread operator 
 2.Object.assign


 lets discuss how to clone objects using SPREAD OPERATOR

 let obj={
       name:"abhishek",
       age:21,
       course:"mca"
 }
       console.log(obj)      //{ name: 'abhishek', age: 21, course: 'mca' }
       let abc = {...obj}
       console.log(abc)//{ name: 'abhishek', age: 21, course: 'mca' },{ name: 'abhishek', age: 21, course: 'mca' }
         

 now check it is actual change orr not 


  let obj={
    name:"abhishek",
    age:21,
    course:"mca"
}
    //console.log(obj) 
     let abc = {...obj}
     obj.age=80
console.log(obj)
console.log(abc)
output
{ name: 'abhishek', age: 80, course: 'mca' }
{ name: 'abhishek', age: 21, course: 'mca' }

yes it works properly





2.object.assign


let obj = {
name:"abhishek",
age:21,
course:"mca"
};
console.log(obj)//{ name: 'abhishek', age: 21, course: 'mca' }
let abc = Object.assign({},obj)
console.log(abc)//{ name: 'abhishek', age: 21, course: 'mca' },,{ name: 'abhishek', age: 21, course: 'mca' }



check works propley or not 
let obj = {
    name:"abhishek",
    age:21,
    course:"mca"
    };
    let abc = Object.assign({},obj)
    obj.course = "bca"
    console.log(abc)
    console.log(obj)
   ----------- output is here=======---------

{ name: 'abhishek', age: 21, course: 'mca' }
{ name: 'abhishek', age: 21, course: 'bca' }






*/


