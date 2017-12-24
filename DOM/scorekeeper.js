var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Disp = document.getElementById("p1Score");
var p1Score = 0;
var p2Disp = document.getElementById("p2Score");
var p2Score = 0;

var maxScore = 5;
var isGame = false;

p1Button.addEventListener("click",function(){
    if(!isGame){
        if(p1Score<maxScore){
            p1Score++;
            p1Disp.textContent = p1Score ;
        }
        else{
            isGame=true;
        }
    }
});

p2Button.addEventListener("click",function(){
    if(!isGame){
        if(p2Score<maxScore){
            p2Score++;
            p2Disp.textContent = p2Score ;
        }
        else{
            isGame=true;
        }
    }
});