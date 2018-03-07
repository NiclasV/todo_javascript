//Declaring a todo as an object
var todo = Object();

//Creating an array to collect the todo-objects
var todos = [];

/*     ELEMENTS      */
const addBtn = document.getElementById('add-btn');

const completeBtn = document.getElementById('complete-btn');

//Checking if there are todos saved in localstorage, if there is, display them
if (JSON.parse(localStorage.getItem("todos"))){
   todos = JSON.parse(localStorage.getItem("todos"));
   console.log(todos);
   displayTodosNotDone();
  }


/* FUNCTIONS */
//Function for adding a new todo object
function addNewTodo(newTodo) {
  var todo = {
    todo: newTodo,
    isDone: false
  }
  //push the todo to the todos-array
  todos.push(todo);

  //save it to localstorage
  localStorage.setItem("todos", JSON.stringify(todos));
  //log it just to see it worked
  console.log(todos)
}


//Create an click-event the addBtn
addBtn.addEventListener('click', function(event) {
  //Preventing defaultevent with refreshing site at click
  event.preventDefault()
  //Get the value from the inputfield to the variable newTodo
  var newTodo = document.getElementById('todo-input').value

  console.log("the new task is\: " + newTodo)

  //add the new todo
  addNewTodo(newTodo);
  
  //display updated todos
  displayTodosNotDone();
});


const deleteBtn = document.getElementById('delete-btn');

//Create an click-event the deleteBtn
deleteBtn.addEventListener('click', function(event) {
  
  //Preventing defaultevent with refreshing site at click
  event.preventDefault()

  console.log("this is " + this.closest('tr'));

});


function displayTodosNotDone() {
  //declaring element in which i'll post my todos
  const listTodosNotDone = document.getElementById('tbody-notdone');
  var todoItem = "";
  for ( let i = 0; i < todos.length; i++) {
    
    //declaring variable for the status of the todo
    var status = "";
    
    //With an if-statement determinate if a todo is done or not, and then list it in the right table
    if (todos[i].isDone === false) {
      var status = "Not done!";

      //Create each todoItem to list it in the table "list-todos"
      todoItem += `
      <tr>
      <td> ${todos[i].todo}</td>
      <td> ${status} </td>
      <td><button type="submit" class="btn-xs btn-primary btn-success" id="complete-btn">Done!</button></td>
      <td><button type="submit" class="btn-xs btn-primary btn-danger" id="delete-btn">Delete</button></td>
      </tr>
      `
    } 

    console.log("detta är " + this.todos[i].todo)
  }
  
  listTodosNotDone.innerHTML = todoItem; 
}

