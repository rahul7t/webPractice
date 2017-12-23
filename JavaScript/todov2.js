var arr = [];
do {
    var like = prompt("What would you like to do?");
    if (like === "list") {
        list();
    }
    if (like === "new") {
        add();
    }
    if (like === "delete") {
        del();
    }
} while (like != "quit");

function list() {
    console.log("******");
    arr.forEach(function (list, i) {

        console.log(i + ": " + list);

    })
    console.log("******");
}

function add() {
    var tmp = prompt("Enter new ToDo");
    arr.push(tmp);
    console.log(tmp+" added to list!");
}
function del() {
    var index = prompt("Index of todo to delete");
    arr.splice(index, 1);
    console.log(index + " deleted!");
}