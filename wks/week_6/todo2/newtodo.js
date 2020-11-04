//Selectors
const todoInput = document.querySelector(".inputToDo");
const todoButton = document.querySelector(".addBtn");
const todoList = document.querySelector(".todo-list");
const filterContainer = document.querySelector(".filterContainer");
//const filterButton = document.querySelector(".btn");

//Event Listeners
todoButton.addEventListener("click", newToDo);
todoList.addEventListener("click", deleteCheck);
filterContainer.addEventListener("click", filterSelect);
//filterButton.addEventListener("click", filterList);

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
        todo.remove();
    }
    if (item.classList[0] === "done-button"){
        const todo = item.parentElement;
        todo.classList.toggle("todo");
        todo.classList.toggle("completed");
        const listed = item.nextElementSibling;
        listed.classList.toggle("crossed")
    }
}


// Add active class to the current filter button
function filterSelect(){
    var btnContainer = document.getElementById("filterContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    var current = document.getElementsByClassName("active");
    const listItem = document.getElementById("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            current[0].className = current[0].className.replace("active", "");
            this.className += " active";
        })
    }
    if (listItem.className[1] == "filterAll"){
        console.log("filterAll");
        // const allItems = document.getElementsByClassName("all");
        // allItems.classList.toggle("show");
    }
    else if (listItem.className[1] == "filterDone"){
        console.log("filterDone");
        // const allItems = document.getElementsByClassName("all");
        // allItems.classList.toggle("show");
    }
    else if (listItem.className[1] == "filterTodo"){
        console.log("filterTodo");
        // const allItems = document.getElementsByClassName("all");
        // allItems.classList.toggle("show");
    }
}


// function filterList() {
//     var x = document.getElementById("filterContainer");
//     var a = document.getElementsByClassName("all");
//     var b = document.getElementsByClassName("todo");
//     var c = document.getElementsByClassName("completed");
//     if (x.classList[1] === "filterAll"){
//         a.style.visibility = "visible";
//     }
//     if (x.classList.contains("filterDone")){
//         b.style.display = "none";
//         c.style.visibility = "visible";
//     }
//     if (x.classList.contains("filterTodo")){
//         b.style.visibility = "visible";
//         c.style.display = "none";
//     }

// }


// function filterList(){
//     var btnContainer = document.getElementById("filterContainer");
//     var btns = btnContainer.getElementsByClassName("btn");
//     var current = document.getElementsByClassName("active");
//     // var ul = document.getElementById("list");
//     // var listAll = document.getElementsByClassName("all");
//     // var listDone = document.getElementsByClassName("completed");
//     // var listTodo = document.getElementsByClassName("todo");
//     if(btns=classList("active") && current){
//         console.log("test");
//     }

// }




/* <button id="all" class="btn filterAll active" onclick="filterSelect(all)"> Show all</button>
    <button id="done" class="btn filterDone"  onclick="filterSelect(done)"> Done</button>
    <button id="todo" class="btn filterTodo"  onclick="filterSelect(todo)"> To Do</button> */


//Filter using filter buttons
// function filterCheck(event) {
// const item = event.target;

// if (item.classList[1] === "filterAll") {
//     const all = document.getElementsByClassName("all");
//     all.classList.toggle("show");
// }

// if (item.classList[1] === "filterTodo"){
//     const todo = document.getElementsByClassName("todo");
//     todo.classList.toggle("show");
// }
// if (item.classList[1] === "filterDone"){
//     const completed = document.getElementsByClassName("completed");
//     completed.classList.toggle("show");
// }
// }