//Todos Object
var todos = [
    {
      todo: 'todo 1',
      isDone: false
    },
    {
      todo: 'todo 2',
      isDone: false
    },
    {
      todo: 'todo 3',
      isDone: false
    }
];

//Saving all todos in localstorage
localStorage.setItem("todos", JSON.stringify(todos));

//Add a constant for the todo add-button.
const addBtn = document.getElementById("add-btn");

//Create an click event for it
addBtn.addEventListener('click', function() {
    console.log('it\'s clickin bitch');
});

//loop out all todos from localstorage (based on the length)
for (var i = 0; i < localStorage.length; i++){
   console.log(localStorage.getItem(localStorage.key(i)));
}
