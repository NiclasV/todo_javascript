//Declaring a todo as an object
var todo = Object();

//Creating an array to collect the todo-objects
var todos = [];

/*     ELEMENTS      */
const addBtn = document.getElementById('add-btn');

//Checking if there are todos saved in localstorage, if there is, display them
if (JSON.parse(localStorage.getItem("todos"))){
   todos = JSON.parse(localStorage.getItem("todos"));
   console.log(todos);
   displayTodos();
  }


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
  displayTodos();

  //Refresh the window
  window.location.reload()
});


const deleteBtn = document.getElementById('delete-btn');

//Create an click-event the deleteBtn
deleteBtn.addEventListener('click', function(event) {
  
  //Preventing defaultevent with refreshing site at click
  event.preventDefault()

 deleteTodo(0);
 window.location.reload()
});

const completeBtn = document.getElementById('complete-btn');

//Create an click-event the deleteBtn
completeBtn.addEventListener('click', function(event) {
  
  //Preventing defaultevent with refreshing site at click
  event.preventDefault()

 completeTodo(0);
 window.location.reload()
});

//Add const for the clearbutton
const clearBtn = document.getElementById('clear-btn');

//Create an click-event the clearBtn
clearBtn.addEventListener('click', function(event) {
  
  console.log('clearBtn Clicked!')

  //Clear all from localstorage
  localStorage.clear();

  //Refresh the window
  window.location.reload()
});

//Function for displaying todos in a table 
function displayTodos() {
  //declaring elements in which i'll post my todos
  const listTodosNotDone = document.getElementById('tbody-notdone');
  const listDoneTodos = document.getElementById('tbody-done');
  var todoItem = "";
  var doneTodoItem = "";

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
    } else {
      var status = "Done!";

      //Create each todoItem to list it in the table "list-done-todo"
      doneTodoItem += `
      <tr>
      <td> ${todos[i].todo}</td>
      <td> ${status} </td>
      <td></td>
      <td><button type="submit" class="btn-xs btn-primary btn-danger" id="delete-btn">Delete</button></td>
      </tr>
      `
    }
  }
  //Display the todos, if done in the done todos table, if not done post in the not done table
  listTodosNotDone.innerHTML = todoItem;
  listDoneTodos.innerHTML = doneTodoItem;
}


//Function for deleting todo from the todosarray with splice
function deleteTodo(index) {
  
  //Splice it from todos array
  todos.splice(index, 1);

  //When deleted from the array, update localstorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

//Function for completing todo from the todosarray by updating its "isDone"-status
function completeTodo(index) {
  
  //Update "isDone" to true
  todos[index].isDone = true;

  //When status updated, update to localstorage
  localStorage.setItem("todos", JSON.stringify(todos));
}