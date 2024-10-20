/*Array:- Storing multiple item into single variable called array;
it is continous memory allocation 
it is non premitive data type
items  are accessed by their index, starting from 0.
In which length is used.
works with methods like slice splice push pop etc.



create an array :
let variablename = [];it is empty array 
let arr=["hello","hey","hii"]
console.log(arr)
let arr=["hello","hey","hii"]
console.log(arr)//[ 'hello', 'hey', 'hii' ]
this type we create array 
now works on methods or functions
let mobile = ["samsung","iphone","realme"]


now i want ADD in the last 
mobile.push("Lava")
console.log(mobile)
let mobile = ["samsung","iphone","realme"]
//now i want add in the last 
mobile.push("Lava")
console.log(mobile)//[ 'samsung', 'iphone', 'realme', 'Lava' ]

now i REMOVE from the last

let mobile = [ 'samsung', 'iphone', 'realme', 'Lava' ]
mobile.pop()
console.log(mobile)// [ 'samsung', 'iphone', 'realme' ]


add from first
let student = ['ramRahim','baba',"ashlam"]
student.unshift("Ashaaram")
console.log(student)// [ 'Ashaaram', 'ramRahim', 'baba', 'ashlam' ]

     remove from first

let student =  [ 'Ashaaram', 'ramRahim', 'baba', 'ashlam' ]
student.shift()
console.log(student)//[ 'ramRahim', 'baba', 'ashlam' ]

CHANGE THE VALUE OF ANY ITEM

let fruit = ["kiwi","apple","mango"]
fruit[0]="papaya"
console.log(fruit)// [ 'papaya', 'apple', 'mango' ]

Know the length of the array
let table = [" 1","2","3","4"]

console.log(table.length)//4
because in length started from 1 and indexing stared from 0

MERGING TWO ARRAYS
let m1 = ["n","m","o","p"]
let m2=["r","s","t","v"]
let m3 = m1.concat(m2)
console.log(m3)//[
    'n', 'm', 'o',
    'p', 'r', 's',
    't', 'v'
  ]
it is also known as concatination which means add two arrays 


Splice

In splice two number are given first is informed about index and
 second one is how much delete from array


 let arr=["ram","apple","santra","halwa"]
 arr.splice(1,2);
 console.log(arr)//["ram","halwa"]


Slice:
it gave the new array where we extract value of the array as like we have an array
an we want two extract two names from existing array then we use slice

now move to syntax
slice(index,till value)

let's see example

let person = ["Sandy","John","yash","rotation","earth"]
let store = person.slice(1,3) // 1 for index and 3 for isse pehle pehle ki value chahiye
console.log(store)//[ 'John', 'yash' ]

another example


let trip = ["manali","haridwar","ganagaji","rameshwaram","tripati bala ji"]
//now i want to show name of haridwar and gangaji and rameshwaram

let store = trip.slice(1,4)
console.log(store)//[ 'haridwar', 'ganagaji', 'rameshwaram' ]


*/
