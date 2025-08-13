DataType :- Which type of Data we storing.

Howe many type of DT.
1. Primitive DT :- inbuilt Datatype
2. Non primitive DT :- userDefined Datatype


Primitive :-
1. String 
2. Boolean
3. Null
4. Number
5. Undefined
6. NAN
7. BIGINT


Non Primitive Datatype :-
1. Array :- huge memory block who store the values.
   [Heterogenous  and Homogenous ]
   Heterogenous:- Diff diff types of data [1,2,true,false,'lucky']
   Homogenous:- same type of data/elements [1,2,3,5,5,6,6] , ['ram','r','j'] 

2. Functions :-  Block of code by using this we can perform a specific task. and we can reusable
   function demo(){
    console.log("hy");
   }
   demo()
   demo()
   demo()

3. Object :- 
   it will store the data in the form of key and value pair.
   let person = {
    name : "lucky",
    id:1,
    rollno :230

   }

4. Maps :- 

=======================================

TypeCasting :- Convert one datatype to another datatype.

There are twi type of typecasting :-
1. Implicit Typecasting -> Automatically  || Internally 
2. Explicit TypeCasting  -> manual || Externally 

=========================================


1. Declare Using let Multiply 7 by 8 and display the result using document.write.

2. Declare Using let Subtract 15 from 25 and display the result.using document.write.

3. Question: Display the type of the variable x , y , z  where x = 42

4. You can declare many variables in one statement.
Start the statement with let and separate the variables by comma:


5. Display the following output :- 
var x = 10;
{
var x = 2;
document.write(x);
}
document.write(x);


1. Value of x is 

const x = 10;

{
const x = 2;
document.write(x);

}
document.write(x);



8. Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

var x = 2;    
const x = 2;   

{
let x = 2;    
const x = 2;   
}

{
const x = 2;   
const x = 2;   
}



9.Reassigning an existing const variable, in the same scope, is not allowed: 

const x = 2;     
x = 2;           
var x = 2;       
let x = 2;       
const x = 2;     

{
  const x = 2;  
  x = 2;        
  var x = 2;    
  let x = 2;     
  const x = 2;   
}

========================================


Datatype :- what kind of data we are storing.

there are two types of DT:-
1. Primitive  -> predefined / inbuilt -> we cannot change 
2. Non Primitive DT -> Userdefined DT -> we can change 

Primitive :- String , Number , null , undefined , boolean , bigint , NAN

Non Primitive DT :- Array , object, functions 

Array :- it is huge memory block who store the diff type of elements.
Homogenous  :- same type of element ,[1,2,3,4,5] , ['hy','by','ty']
and Hetrogenous   :- diff diff type of element -> [1,2,4,"hy",'by',true]

we can create the array in two types :-
1. Array literal 
2. new keyword

let arr = [1,2,3,'h',true]

let arr1 = new Array();

===============================


Object :- it will store the data in the key and value pair

let person = {
   id :1,
   name : 'nikita',
   address: 'indore'
}

===============================

function :- it is a block of code by using this we can perform a specific task;
         Reusable.

