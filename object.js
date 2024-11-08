/*

OBJECTS IN JAVASCRIPT

object is the collection of key value pairs.
it the instance of class.
javascript is also object based language 
it is the advance version of array


we define objects as:
let veriablename = {}//this is the syntx of the objects

OBJECT-LITERALS:

let obj = {
    name:"bahrat",
    course:"b.tech",
    year:"1st",
    collegeName:"NGF"
    }
    
    console.log(obj["name"])//bharat 
    this is called object literals another example of this
    
let obj = {
    name:"bahrat",
    course:"b.tech",
    year:"1st",
    1:"NGF"
    }
    
    console.log(obj[1])//NGF  [ this is correct way to excess the object ]

let obj= {
    name:"ram kumar khiladi",
    age:"55 year",
    profile:{
        department:"computer science",
        location :"faridabad",
        sector:{
            secname:"twentytwo"
        }
    }
}

 console.log(obj);



   it we UPDATE the property of any value then try this 


   UPDATE

let obj = {
    name:"bahrat",
    course:"b.tech",
    year:"1st",//change with 1st year behalf of condition
    1:"NGF"
    }
    obj.year= '2nd year'
    
    console.log(obj)


   it we add the property of any value then try this 


   ADD

let obj = {
    name:"bahrat",
    course:"b.tech",
    year:"1st",
    1:"NGF"
    }
    obj.email = "bharatsharma@gmail.com"
    
    console.log(obj)

    OUTPUT THIS IS SHOWN AS 
    {
  '1': 'NGF',
  name: 'bahrat',
  course: 'b.tech',
  year: '1st',
  email: 'bharatsharma@gmail.com'
}


NOW DELETE

let obj = {
    name:"bahrat",
    course:"b.tech",
    year:"1st",
    1:"NGF"
    }
    delete obj.course;
    
    console.log(obj)

OUTPUT IS THIS 
{ '1': 'NGF', name: 'bahrat', year: '1st' }

NOW OBJECT WITH NESCTED OBJECT AND ARRAYS




let tree = {
    grandpa:"harry",
    grandma:"nrml",
    address:["village","andla","aligarh"],
    parent:{
    pa:"sn",
    ma:"mn",
    bro:"mn",
    }
    }
    console.log(tree.address[2])//aligarh
   
    

    ------Function Constructor Object----



function Student(name,course,age,college){
    this.name = name;
    this.course = course;
    this.age = age;
    this.college =college;
}
let student = new Student("lala","bca",21,"npm");
student.nationality="indian"//add value in student 
student.age=22//it is used to update value and you can say edit in your language
delete student.college//it delete the college from student's object
console.log(student);
let stuedent1 = new Student("lol","bba",11,"npm")
console.log(stuedent1);
//console.log(student.age);

we create two objects and the difference between this 
student object //Student { name: 'lala', course: 'bca', age: 22, nationality: 'indian' }
stuedent1 object //Student { name: 'lol', course: 'bba', age: 11, college: 'npm' }

OBJECT PROTOTYPE
function Person (first,second){
    this.firstName = first;
    this.secondName = second;
    }
    Person.prototype.gender = "Male"
    const person1 = new Person ("Elon","Musk")
    const person2 = new Person("Bill","Gates")
    console.log(person1.gender)
    console.log(person2)
    this is all about the object prototype it inherit the property the object main object 


    now we use the function with prototype
    function Person (first,second){
    this.firstName = first;
    this.secondName = second;
    }
    Person.prototype.getfullname = function(){
    retun this.firstName +""+this.secondName
    };


    const person1 = new Person ("Elon","Musk")
    const person2 = new Person("Bill","Gates")
    console.log(person1)





    this is from method where we can use the function 
    function Person (first,second){
    this.firstName = first;
    this.secondName = second;
    }
    Person.prototype.getfullname = function(){
    return this.firstName +""+this.secondName
    };


    const person1 = new Person ("Elon","Musk")
    const person2 = new Person("Bill","Gates")
    console.log(person2)

*/







//constructor object


// function Person(name ,age,address){
// this.firstname = name;
// this.age=age;
// this.address = address;
// }
// let person1 = new Person("Vansh",21,"delhi");
// person1.profile = "web developer"
// person1.address = "faridabad"
// delete person1.age;
// console.log(person1);\



// function Person(name ,age,address){
//  this.firstname = name;
//  this.age=age;
//  this.address = address;
 
// }
// Person.prototype.gender = "Male"
// let person1 = new Person("Vansh",21,"delhi");
// console.log(person1)









// const person = {};

// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue"; 

// console.log(person.age);




// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue"; 
// console.log(person);



