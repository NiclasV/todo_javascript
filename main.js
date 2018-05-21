//Declaring a todo as an object
var todo = Object();

//Creating an array to collect the todo-objects
var todos = [];


//Checking if there are todos saved in localstorage, if there is, display them
if (JSON.parse(localStorage.getItem("todos"))){
   todos = JSON.parse(localStorage.getItem("todos"));
   displayTodos();
}

//Function for adding a new todo-object
function addNewTodo(newTodo) {
  var todo = {
    todoText: newTodo,
    isDone: false
  }
  //push the todo to the todos-array
  todos.push(todo);
  //save it to localstorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

//Delaring the addBtn
const addBtn = document.getElementById('add-btn');
//Create an click-event
addBtn.addEventListener('click', function(event) {
  //Preventing defaultevent with refreshing site at click
  event.preventDefault()
  //Get the value from the inputfield to the variable newTodo
  var newTodo = document.getElementById('todo-input').value
  //Add the new todo
  addNewTodo(newTodo);
  //Refresh the window
  window.location.reload()
});

//Declaring the DeleteBtn
const deleteBtn = document.getElementsByClassName('delete-btn');
//Create an click-event the deleteBtn, since the ByClassName gets a HTMLcolletion array with all the buttons i gotta looop it!
for (var i = 0 ; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function(event) {
    //Preventing defaultevent with refreshing site at click
    event.preventDefault()

    //Declaring theTodoText which is the todo to delete, based on the textinput (which is the todoobjects todotext) in the first table-column
    var theTodoText = this.parentNode.parentElement.firstElementChild.innerText; 

    //Gotta find the specific index of the todo to delete, i use findIndex and use the above declared variable
    var todoIndex = todos.findIndex(function(element){return element.todoText === theTodoText})

    deleteTodo(todoIndex); /* Deleting the todo based on the index found! */
    window.location.reload()
  })
};

//Declaring the completeBtn
const completeBtn = document.getElementsByClassName('complete-btn');
//Create an click-event the completeBtn, since the ByClassName gets a HTMLcolletion array with all the buttons i gotta looop it!
for (var i = 0 ; i < completeBtn.length; i++) {
  completeBtn[i].addEventListener('click', function(event) {
    //Preventing defaultevent with refreshing site at click
    event.preventDefault()

    //Declaring theTodoText which is the todo to complete, based on the textinput (which is the todoobjects todotext) in the first table-column
    var theTodoText = this.parentNode.parentElement.firstElementChild.innerText; 
    //Gotta find the specific index of the todo to complete, i use findIndex and use the above declared variable
    var todoIndex = todos.findIndex(function(element){return element.todoText === theTodoText})

    completeTodo(todoIndex); /* Completing the todo based on the index found! */
    window.location.reload()
  })
};


//Declaring the clearbutton
const clearBtn = document.getElementById('clear-btn');
//Create an click-event
clearBtn.addEventListener('click', function(event) {
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

      //Create each todoItem to later list in the "listTodosNotDone"
      todoItem += `
      <tr>
      <td id="not-done"> ${todos[i].todoText}</td>
      <td> ${status} </td>
      <td><button type="submit" class="btn-xs btn-primary btn-success complete-btn">Done!</button></td>
      <td><button type="submit" class="btn-xs btn-primary btn-danger delete-btn">Delete</button></td>
      </tr>
      `
    } else {
      var status = "Done!";

      //Create each doneTodoItem to later list in the "listDoneTodos"
      doneTodoItem += `
      <tr>
      <td> ${todos[i].todoText}</td>
      <td> ${status} </td>
      <td><button type="submit" class="btn-xs btn-primary btn-danger delete-btn">Delete</button></td>
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

console.log(deleteBtn);
console.log(deleteBtn[0])
