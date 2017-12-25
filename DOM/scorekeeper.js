var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Disp = document.getElementById("p1Score");
var p1Score = 0;
var p2Disp = document.getElementById("p2Score");
var p2Score = 0;
var resetButton = document.querySelector("#reset");
var maxScoreDisp = document.querySelector("p span");
var textInput = document.querySelector("input");

var maxScore = 5;
textInput.textContent = maxScore;
var isGame = false;

p1Button.addEventListener("click",function(){
    if(!isGame){
        p1Score++;
        if(p1Score===maxScore){
            p1Disp.classList.add("winner");
            isGame=true;
        }
        p1Disp.textContent = p1Score ;
    }
});

p2Button.addEventListener("click",function(){
    if(!isGame){
        p2Score++;
        if(p2Score===maxScore){
            p2Disp.classList.add("winner");
            isGame=true;
        }
        p2Disp.textContent = p2Score ;
    }
});

resetButton.addEventListener("click",function(){
    reset();
});

function reset(){
    p1Score = 0;
    p1Disp.textContent = p1Score ;
    p1Disp.classList.remove("winner");
    p2Score = 0;
    p2Disp.textContent = p2Score ;
    p2Disp.classList.remove("winner");
    isGame=false;
}

textInput.addEventListener("change",function(){
    maxScoreDisp.textContent=Number(this.value);
    maxScore=Number(this.value);
    reset();
});