
// do{
//     var yet = prompt("Are we there yet?");
// }
// while(yet!="yes");

// alert("We finally made it!");

//ver 2
var yet = prompt("Are we there yet?");
while(yet.indexOf("yes")==-1){
    var yet = prompt("Are we there yet?");
}

alert("We finally made it!");