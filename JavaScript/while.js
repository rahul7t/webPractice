console.log("Numbers between -10 and 19");
var i=-10;
while(i<=19){
    console.log(i);
    i++;
}

console.log("Even numbers between 10 and 40");
i=10;
while(i<=40){
    if(i%2==0){
        console.log(i);
    }
    i++;
}

console.log("Odd numbers between 300 and 333");
i=300;
while(i<=333){
    if(i%2!=0){
        console.log(i);
    }
    i++;
}

console.log("Numbers between divisible by 3 and 5 between 5 and 50");
i=5;
while(i<=50){
    if(i%3==0&&i%5==0){
        console.log(i);
    }
    i++;
}