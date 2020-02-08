$(document).ready(function(){
$("#logoMob").mouseenter(function(){
    $("#menuToggle").css({"filter": "invert(1)", "transition": "1s"});
});
$("#logoMob").mouseleave(function(){
    $("#menuToggle").css({"filter": "invert(0)", "transition": "1s"});
});
});