import { store } from "./store";
// import * as actions from "./actionTypes";
import { bugAdded, bugResolved } from "./actions";

// state = reducer(state, action)'
// notify the subscribers

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });
// unsubscribe();

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: "Bug1",
//   },
// });

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });
// console.log(store.getState());

// //console.log("Hello World!");
// // function sayHello(){
// //     return function(){
// //         return "Hello world";
// //     }
// // }
// //  let fn = sayHello;
// //  let message = fn();
// // function greet(fnMessage){
// //     console.log(fnMessage());
// // }
// // greet(sayHello);
// //setTimeout(()=> console.log("Hello",1000));
// import { compose, pipe } from "lodash/fp";
// import { Map } from "immutable";
// import { produce } from "immer";

// let input = "    Javascript  "; //trim
// let output = "<div>" + input.trim() + "</div>"; // wrap in Div
// const trim = (str) => str.trim();
// const wrap = (type) => (str) => `<${type}>${str}</{type}>`;
// // const wrapInDiv = str => `<div>${str}</div>`; // wrap intrim
// // const wrapInSpam = str => `<span>${str}</span>`; // wrap in Div
// const toLowerCase = (str) => str.toLowerCase();
// //const result = wrapInDiv(toLowerCase(trim(input)));
// // with lodash --> order of operations
// // const transform = compose(wrapInDiv, toLowerCase, trim);
// const transformOrder = pipe(trim, toLowerCase, wrap("div"));
// console.log(transformOrder(input));

// // Pure functions given the same arguments it will always return the same result ; no current date and time ; no random values ; no global state (DOM, files, dv, etc)
// // example of a non pure function
// function myFunction(number) {
//   return number * Math.random();
// }
// // // another example of a non pure function because min age is a global varible
// // function isEligible(age){
// //     return age > minAge
// // }
// // in redux reducers need to be pure functions

// //benefits of pure functions --> easier to test; self-documenting; cachable; concurrency
// // immutability ( once you create an object you can not change or mutate it) **const** why use? predictability ; faster change detection ; concurrency ---- why not use? performance ; memory overhead
// //structural sharing "..." spread operator --> in redux should not mutate data

// // updating objects
// const person = {
//   name: "john",
//   address: {
//     country: "USA",
//     city: "New York City",
//   },
// };
// const updated = Object.assign({}, person, { name: "Bob", age: 30 });
// const betterUpdated = { ...person, name: "Bob" };
// // deep copy
// const newupdate = {
//   ...person,
//   address: {
//     ...person.address,
//     city: "San fran",
//   },
//   name: "Bob",
// };
// console.log(newupdate);

// const numbers = [1, 2, 3];
// //adding
// const index = numbers.indexOf(2);
// const added = [numbers.slice(0, index), 4, ...numbers.slice(index)];
// console.log(added);

// //Removing
// const removed = numbers.filter((n) => n !== 2);

// //updating
// const updatedarray = numbers.map((n) => (n === 2 ? 20 : n));

// //libraries about immutability :  immutable JS
// // let book = Map({ title: "Harry Potter" });

// // // function publish(book) {
// // //   book.ispublished = true;
// // // }

// // function publish(book) {
// //   book.set("ispublished", true);
// // }
// // book = publish(book);
// // console.log(book.toJS);
// // publish(book);
// //console.log(book.get("title"));

// // immer
// let book = { title: "Harry Potter" };
// function publish(book) {
//   return produce(book, (draftBook) => {
//     draftBook.isPublished = true;
//   });
// }
// let updatedBook = publish(book);
// console.log(book);
// console.log(updatedBook);

// // mori

// // each reducer is responsible for updating a specific peice of the store
// // store: single javascript object that includes the application statements
// // action: plain javascript objects that represent what just happened (events)
// // reducers (like event handlers) - updating a peice of the store with

// //create an action and dispatch it
// // state sets store internally is
