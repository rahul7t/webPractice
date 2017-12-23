var arr = [];
do {
    var like = prompt("What would you like to do?");
    if (like === "list") {
        console.log(arr);
    }
    if (like === "new") {
        var tmp = prompt("Enter new ToDo");
        arr.push(tmp);
    }
} while (like != "quit");
