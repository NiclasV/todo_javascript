//Declaring a todo as an object
var todo = Object();
var todo = {
  todo: "Diska", 
  isDone: false
};

//Creating an array to collect the todo-objects
var todos = [];

localStorage.setItem("todos", JSON.stringify(todos));
var storedTodos = JSON.parse(localStorage.getItem("todos"));

//Pushing the pre-created todo to the array and console-logs the result (to see that it works)
todos.push(todo);
console.log(storedTodos);

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
    todo: newTodo,
    isDone: false
  };


  //Pushing the new todo to the todos-array created before
  storedTodos.push(todo);



  //loop out each todo in a new row in the table
  for ( let i = 0; i < storedTodos.length; i++ ) {

    //declaring each todo in the loop as theTodo
    var theTodo = storedTodos[i].todo;
    var todoTextNode = document.createTextNode(theTodo)

    //Declaring elements needed to add the todos in the table
    const listTodos = document.getElementById("list-todos");
    
    const todosDiv = document.createElement('div'); 
    todosDiv.id = 'todo-div';

    console.log(todoTextNode);
        
  }
    
});