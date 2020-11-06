//Selectors
const todoInput = document.querySelector(".inputToDo");
const todoButton = document.querySelector(".addBtn");
const todoList = document.querySelector(".todo-list");
const allFilter = document.getElementById("btn1");
const doneFilter = document.getElementById("btn2");
const todoFilter = document.getElementById("btn3");
const allClass = document.getElementsByClassName("all");
const doneClass = document.getElementsByClassName("done");
const todoClass = document.getElementsByClassName("todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", newToDo);
todoList.addEventListener("click", deleteCheck);
allFilter.addEventListener("click", ()=> filterSelect("all"));
doneFilter.addEventListener("click", ()=> filterSelect("done"));
todoFilter.addEventListener("click", ()=> filterSelect("todo"));

//Functions
function newToDo(event) {
//prevent form from auto submitting
    event.preventDefault();
//Create a todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("all", "todo");
//Completed Button
    const completedButton = document.createElement("button");
    completedButton.classList.add("done-button");
    completedButton.innerText = "Done";
    todoDiv.appendChild(completedButton);
//Create the LI
    const newTodoItem = document.createElement("li");
    newTodoItem.classList.add("todo-item");
    newTodoItem.innerText = todoInput.value;
    todoDiv.appendChild(newTodoItem);
//Local storage, add to storage
    saveLocalTodo(todoInput.value);
//Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    todoDiv.appendChild(deleteButton);
//append to list
    todoList.appendChild(todoDiv);
//Clear input field
    todoInput.value = "";
//
}

//Checking for actions
function deleteCheck(event) {
    const item = event.target;
    //Delete the listed item
    if (item.classList[0] === "delete-button"){
        const todo = item.parentElement;
        removeLocalStorage(todo);
        todo.remove();
    }
    if (item.classList[0] === "done-button"){
        const todo = item.parentElement;
        todo.classList.toggle("todo");
        todo.classList.toggle("done");
        const listed = item.nextElementSibling;
        listed.classList.toggle("crossed");
    }
}

//
function filterSelect(type) {
    if (type === "all"){
        allFilter.classList.toggle('active', true);
        todoFilter.classList.toggle('active', false);
        doneFilter.classList.toggle('active', false);
        for (let i = 0; i < allClass.length; i++) {
            allClass[i].style.display = "";
        }
    }
    else if (type === "done"){
        allFilter.classList.toggle('active', false);
        todoFilter.classList.toggle('active', false);
        doneFilter.classList.toggle('active', true);
        for (let i = 0; i < allClass.length; i++) {
            if (allClass[i].classList.contains("done")) {
            allClass[i].style.display = "";
                }
            else {
                allClass[i].style.display = "none";
                }
            }
        }
    else if (type === "todo"){
        allFilter.classList.toggle('active', false);
        todoFilter.classList.toggle('active', true);
        doneFilter.classList.toggle('active', false);
        for (let i = 0; i < allClass.length; i++) {
            if (allClass[i].classList.contains("todo")) {
            allClass[i].style.display = "";
                }
            else {
                allClass[i].style.display = "none";
            }    
        }
    }
    else {
        allFilter.classList.toggle('active', false);
        todoFilter.classList.toggle('active', false);
        doneFilter.classList.toggle('active', false);
    }
}

//Local Storage
function saveLocalTodo(todo){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
//Check for info    
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
//Create a todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("all", "todo");
//Completed Button
    const completedButton = document.createElement("button");
    completedButton.classList.add("done-button");
    completedButton.innerText = "Done";
    todoDiv.appendChild(completedButton);
//Create the LI
    const newTodoItem = document.createElement("li");
    newTodoItem.classList.add("todo-item");
    newTodoItem.innerText = todo;
    todoDiv.appendChild(newTodoItem);
//Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    todoDiv.appendChild(deleteButton);
//append to list
    todoList.appendChild(todoDiv);
    });
}

function removeLocalStorage(todo) {
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    //console.log(todo.children[1].innerText);
    const todoIndex = todo.children[1].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}