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
    


*/

