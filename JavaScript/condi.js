var age = prompt("Enter age");

if(age<0){
    console.log("Error: Age cannot be negative");
}
else if(age===21){
    console.log("Happy 21st Birthday!");
}

else if (age%2!=0){
    console.log("Your age is odd!");
}

else if(age%Math.sqrt(age)==0){
    console.log("Perfect Square!");
}
else {
    console.log("You are "+age+" years old");
}