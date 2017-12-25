var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisp = document.querySelector("#colorDisp");
var messageDisp = document.querySelector("#message");

colorDisp.textContent = pickedColor;
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisp.textContent ="Right";
            changeColors(clickedColor);
        }
        else{
            this.style.backgroundColor = "#232323"
            messageDisp.textContent ="Wrong";
        }
    });
}

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}