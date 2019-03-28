window.setTimeout(function() {

    var todos = ["Buy New Turtle"];

    var input = prompt("what would you liike to do?")

    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        input = prompt("what would you liike to do?")
    }
    console.log("OK... you quit :(")

function listTodos(){
    console.log("***********")
    todos.forEach(function(todo, index) {
        console.log(index + ": " +todo);
    });
    console.log("***********")
}

function addTodo(){
    var newTodo = prompt("Enter new ToDo");
    todos.push(newTodo);
    console.log("Added ToDo!");
}

function deleteTodo(){
    var indexOf = prompt("Enter index of ToDo to delete")
    todos.splice(indexOf, 1);
    console.log("Deleted ToDo!");
}

}, 500);
