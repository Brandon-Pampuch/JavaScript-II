// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


const addName = () =>{
let stuff = ["teddy", "car", "house"]
let list = []

  return function(){

    list.push(stuff[0])

    return list
  }
  
}

let addToList = addName()

console.log(addToList())

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {

  let count = 0
  // Return a function that when invoked increments and returns a counter variable.

  return  function(){
    count = count + 1
    return count
  }
  }

let newCounter = counter()
// Example usage: const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  count = 1

  return {
    increment: function(){
      count = count + 1
      return count
    },
    decrement: function(){
      count = count - 1
      return count
    }
  }
}


let calculator = counterFactory()

console.log(calculator.increment())
console.log(calculator.increment())