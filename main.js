//Declaring a todo as an object
var todo = Object();
var todo = {
  todo: "Diska", 
  isDone: false
};

//Creating an array to collect the todo-objects
var todos = [];

//Pushing the pre-created todo to the array and console-logs the result (to see that it works)
todos.push(todo);


/* ELEMENTS NEEDED */
const addBtn = document.getElementById('add-btn');


/* FUNCTIONS */

//Function for adding a new todo
function addNewTodo(newTodo) {
  var todo = {
    todo: newTodo,
    isDone: false
  }
  //push the todo to the todos-array
  todos.push(todo);

  //log it just to see it worked
  console.log(todos)
}

console.log(todos)

/* EVENT FOR CLICK ON addBtn */
addBtn.addEventListener('click', function(event) {
  //Preventing defaultevent with refreshing site at click
  event.preventDefault()

  //Get the value from the inputfield to var newTodo
  var newTodo = document.getElementById('todo-input').value;

  //Creating a newtodo based on the value from the inputfield
  addNewTodo(newTodo);

  console.log("Succesfully added a todo!")
});

displayTodos();

function displayTodos() {
  for ( let i = 0; i < todos.length; i++) {
    //declaring element in which i'll post my todos
    const listTodos = document.getElementById('tbody');
    //declaring variable for the status of the todo
    var status = "";
    
    //Small check for the status of the todo (tried a function to call but got problem with the variable scopes)
    if (todos[i].isDone === false) {
      var status = "Not done!";
    } else {
      var status = "Done!";
    }

    //Create each todoItem to list it in the table "list-todos"
    let todoItem = `
    <tr>
    <td> ${todos[i].todo}</td>
    <td> ${status}</td>
    <td><button type="submit" class="btn-xs btn-primary btn-success" id="delete">Done!</button></td>
    </tr>
    `
    listTodos.insertAdjacentHTML('afterbegin', todoItem);
  }
}

