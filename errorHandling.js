/*
Error Handling:
error handling means error comes in our code then our code is not running well show 
some issues


two types of erro
1.Compiletime error:
it means error comes before execution like syntax error and other tyoe which is
shown in parse 

2.runtime error:
it means error comes after the execution when it executed then comes like reference error etc



now we have to handle the errors by the help of handling 
TRY
CATCH


now we talk about TRY
in which chances of occuring error as error comes then stop the execution and send to the 
catch block



----Catch--
in which errors are comes then it show error 


try and catch block of scope 

try{


}

catch(err){

}



and one of the most finally keyword it executes always finally{

}

either error comes or not 





example


 try{
   console.log("start")
 console.log(x)
 console.log("end")
 }
catch(err){
console.log("error are comes",err)
}
output
start
error are comes ReferenceError: x is not defined
when it faces error then it send to catch block and no next line executed


finally example 

try{
   console.log("start")
 console.log(x)
 console.log("end")
 }
catch(err){
console.log("error are comes",err)
}
finally
{
console.log("i am always run ")
}

output
start
error are comes ReferenceError: x is not defined
i am always run


one cocept throw the error 


try{
console.log(x)
}
catch(err){
throw newError ("hey there is an error")
}

output
Error: hey there is an error





*/
