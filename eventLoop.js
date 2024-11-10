/*
EVENT LOOP:
it is used for performing asynchronous task 
firstly we know about synchronous and asynchronous 
-----Synchronous task is that where code execute line by line and working fast and it is blocking 
-----Asynchronous task is that where we donot know how much time it takes as like network call,databasecode etc
     so we run this by the concept of event loop 


big question that how we know asynchronous and synchronous task 

 asynchronous task which is commit with duration(timing) and 
 synchronous where not use of timing

EVENT LOOP
there are three things 
1.Call Stack
2.Browser
3.Event Queue


//one important thing is that thread block and non block 


1.call stack is used to execute the code 
where code comes line by line if it get asynchronouos task then it handover to the browser 
then brower take and wait for time how much time to execute then complete task
it send to the queue event queue check call stack its empty or not


2.browser:
call stack handover the task then it check it is executed or not with the duration  then it
execute it send to the event queue


3.Event Queue:
it wait for call stack is it empty orr not if empty then send to the call stack and task 
is done 


example:
console.log("a")
console.log("b")
setTimeout(myGreeting, 5000);
console.log("c")


//////output:
a
b
c
mygreeting


*/