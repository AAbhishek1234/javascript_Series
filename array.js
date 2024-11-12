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

// const greet =()=>{
// console.log("hello")
// }
// greet()


// const greet = (a,b)=> a+b;
// console.log(greet(3,2))


/*
REVERSE AN ARRAY

let arr=[1,2,3,4,5,6];
arr.reverse()
console.log(arr)//[ 6, 5, 4, 3, 2, 1 ]



SORT AN ARRAY

let array = [5,3,6,2,9,1]
array.sort()
console.log(array)//[ 1, 2, 3, 5, 6, 9 ]


Find the Largest Element in an Array:
arr = [10, 20, 30, 50, 5, 60]

let arr = [10, 20, 30, 50, 5, 60]
let largest =arr[0]
for(i=0;i<=arr.length;i++ ){
if(arr[i]>largest){
largest =arr[i]
}
}

console.log(largest)//60


Find the Smallest Element in an Array:

arr = [10, 20, 30, 50, 5, 60]

let smaller = arr[0]
for(let i =0;i<=arr.length;i++){
if(arr[i]<smaller){
smaller = arr[i]
}
}

console.log(smaller)





Find the Second Largest Element in an Array:
arr = [10, 20, 30, 50, 5, 60]



    
find the value exixst or not in array
let arr = [1, 2, 3, 4, 5];
let value = 3;
let exists = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        exists = true; 
        break;  
    }
}

console.log(exists); 






___________________MAP______________________
it works on return new array and it return same length and work with call back function
map means gave the new array and work with this 


let arr = [1,2,3,4,5]
let newArr = arr.map((element)=>{
    return element*2
    })
console.log(newArr)//[ 2, 4, 6, 8, 10 ]




_________________FILTER__________________________
it filter the array according to user condition where as like chay patti or chay 
it also return new array
it work with call back function


let arr = [56,2,3,44,89,99]
let newArray = arr.filter((element)=>{
    return element%2==0
    })
console.log(newArray)



____________________REDUCE_____________________
 it retuns the single value from an array
 it is use when we want to single value from array 
 it also works on the given new array 


let array=[2,3,45,60]
let newArray = array.reduce((accumulator,current )=>{
    return accumulator+current 
    })
console.log(newArray)//110






----------------------------ARRAY CONVERT INTO OBJECT------------------
let arr = ["hello","name","person"];
let arrobj={...arr}
console.log(arrobj)//{ '0': 'hello', '1': 'name', '2': 'person' }


============KNOW VALUE AND INDEXING-------

let arr=["ab","cd","ef","gh"]
arr.forEach((value,index)=>{
console.log("number:",value,"index:",index)
})
*/





