// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// console.log("3");

// execution flow :-

// console.log("1"); // call stack   -> print 1

// setTimeout(...,0) -> api fetch -> 0 fetch -> callback -> event queue -> event loop -> call stack -> print 2
//  console.log("3");// call stack 


// call stack -> LIFO , FILO
// FIFO


// [call stack]
    //  |
    // [Event Loop]
     // |
    //  [Microtask Queue] -> first priority
    //  |
    //  [MacroTask Queue] -> after micro


    // call stack -> exe code one function at a time [LIFO]
    // web Api -> browser handles async task 
    // Event Queue -> store the callback waiting to be executed
    // event loop -> moves tasks from queue to stack when the stack is empty.


//     console.log("1");

//     setTimeout(() => {
//     console.log("2");
// }, 0);

// Promise.resolve().then(()=>{
//     console.log("3");
// })

// console.log("4"); // 1 3 4 2 // 1 4 3 2 

// function parent(){

//     let x =10;
//     let y = 20;
//     function child(){
//         let c = x+y;
//         console.log(c);
//     }
//     child()
// }

// parent()


// demo()
// function demo(){
//     console.log("raja pagal");
// }

// demo1()
// let demo1 = function(){
//     console.log("hy");
// }


// tdz

// console.log(a);
// let a = 10;


// middleware -> 
// fs append


// server creation -> http.create , express

// path , __dirname , 

// multer 




