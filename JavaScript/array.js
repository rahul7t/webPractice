function printReverse(arr){
    for(var i=arr.length-1; i>=0;i--){
        console.log(arr[i]);
    }
}

function isUniform(arr){
    var fst = arr[0];
    for(var i=1;i<arr.length;i++){
        if(fst!=arr[i]){
            return false;
        }
    }
    return true;
}

function sumArray(arr){
    var sum =0;
    arr.forEach(function(element) {
        sum=sum+element;
    });
    return sum;
}

function max(arr){
    var max =0;
    arr.forEach(function(element) {
        if(max<element){
                max=element;
        }
        
    });
    return max;
}