// var flag=0;
// document.querySelector("button").addEventListener("click",function(){
//     if(flag===0){
//         document.querySelector("body").style.background ="purple";
//         flag=1;
//     }
// 	else{
//         document.querySelector("body").style.background ="white";
//         flag=0;
//     }
// });

document.querySelector("button").addEventListener("click",function(){
    document.body.classList.toggle("purple");
});
