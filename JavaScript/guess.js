
var x = Math.floor((Math.random() * 10) + 1);
console.log(x);
do{
    var guess = Number(prompt("Guess a Number 1-10"));
    if(guess===x){
        alert("You guessed it right!!!");
        break;
    }
    if(guess<x){
        alert("Guess higher");
    }
    if(guess>x){
        alert("Guess lower");
    }
}while(x!=guess);
