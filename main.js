//Declaring a todo as an object
var todo = Object();
var todo = {
  task: "Diska", 
  isDone: false
};

//Creating an array to collect the todo-objects
var todos = [];

//Pushing the pre-created todo to the array and console-logs the result (to see that it works)
todos.push(todo);
console.log(todos);

//Add a constant for the todo add-button.
const addBtn = document.getElementById("add-btn");

//Create an click-event for it
addBtn.addEventListener('click', function(event) {
  //Preventing defaultevent with refreshing site at click
  event.preventDefault()
  //Get the value from the inputfield to the variable newTodo
  var newTodo = document.getElementById('todo-input').value

  console.log("the new task is\: " + newTodo)

  //Creating a new todo with the value from the input-field
  var todo = {
    task: newTodo,
    isDone: false
  };

  //Pushing the new todo to the todos-array created before
  todos.push(todo);
  console.log(todos)

});

  
