//console.log("Hello World!");

function sayHello(){
    return function(){
        return "Hello world";
    }
}

 let fn = sayHello;
 let message = fn();
// function greet(fnMessage){
//     console.log(fnMessage());
// }

// greet(sayHello);