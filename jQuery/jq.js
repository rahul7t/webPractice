$('#trigger').click(function(){
    $('body').css("backgroundColor","yellow");
    $('img').fadeOut(3000,function(){
        $(this).remove();
    });
});


$("div").css("background","purple");

$(".highlight").css("width","200px");

$("#third").css({
    "border-style" : "solid",
    "border-color" :"orange",
    "border-width" : "5px"
    });
$("#third").css("border", "2px solid orange");

$("div:first-of-type").css("color", "pink");