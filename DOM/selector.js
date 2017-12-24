var p1 = document.getElementById("first");

var p2 = document.getElementsByClassName("special");

var p3 = document.getElementsByTagName("p");

var p4 = document.querySelector("#first");
var p4 = document.querySelector(".special");

var but = document.getElementsByTagName("button");
var back = document.getElementsByTagName("body");
document.querySelector("button").addEventListener("click",function(){
    if(flag===0){
        document.querySelector("body").style.background ="purple";
        flag=1;
    }
	else{
        document.querySelector("body").style.background ="white";
        flag=0;
    }
});