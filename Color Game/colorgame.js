var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisp = document.querySelector("#colorDisp");
var messageDisp = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModes();
    setUpSquares();
    reset();
}

function setUpModes(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares =  6;
            reset();
        });
    }   
}
function setUpSquares(){
    for(var i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisp.textContent ="Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor ;
                resetButton.textContent="Play again?";
            }
            else{
                this.style.backgroundColor = "#232323"
                messageDisp.textContent ="Wrong";
            }
        });
    }
}


function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
    resetButton.textContent="New Colors"
    messageDisp.textContent ="";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];    
        }else{
            squares[i].style.display = "none";
        }    
    }
    h1.style.backgroundColor= "steelblue";
}



resetButton.addEventListener("click",function(){
    reset();
});


function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
        for(var i=0;i<num;i++){
            arr.push(randomColor());
        }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
