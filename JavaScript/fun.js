function isEven(no){
    if(no%2===0){
        return true;
    }
    return false;
}

function factorial(no){
    var fac=1;
    for(var i=no;i>0;i--){
        fac = fac * i;
    }
    return fac;
}

function kebaToSnake(str){
    return str.replace("-", "_");
}