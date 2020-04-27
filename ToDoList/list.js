var todos = ["Groceries"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listTodos();
    }
    else if (input === "new") {
        addTodo();
    }
    else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}

console.log("You quit the app.");

function listTodos() {
    console.log("*********");
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("*********");
}

function addTodo() {
    var newTodo = prompt("Enter new thing to do");
    todos.push(newTodo);
    console.log("Todo added successfully");
}

function deleteTodo() {
    index = prompt("Enter index of todo you want to delete");
    todos.splice(index, 1);
    console.log("Todo at index " + index + " deleted")
}