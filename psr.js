var p1Score = 0;
var p2Score = 0;
var p1Score_span = document.getElementById("p1Score");
var p2Score_span = document.getElementById("p2Score");
var res_div = document.getElementById("res");

function rndChoice() {
    var rndNum = Math.floor(Math.random() * 3) + 1;
    return rndNum;
};
function clear(){
    $(".paper").html("");
    $(".scissors").html("");
    $(".rock").html("");
};
function next(){
    clear();
    $(".paper").fadeIn(500);
    $(".scissors").fadeIn(500);
    $(".rock").fadeIn(500);
    $(res_div).css("display","none");
    randGenerator();
};
function calculations(p1choice) {
    var p2choice = rndChoice();
    var won = false;
    if (p1choice === p2choice) {
        $(res_div).html("Both choose the same. Draw!");
        $(res_div).fadeIn(1000);
    } else {
        switch (p1choice) {
            case 1:
                if (p2choice === 2) {
                    $(res_div).html("You choose <span id='selected'>Paper</span> and computer choose Scissors. Computer Won!");
                    p2Score += 1;
                    $("#res").show();
                    $("#res").animate({"font-size":"32pt"} ,1500);
                    $("#res").animate({"font-size":"20pt"} ,1500);
                    $(".scissors").fadeOut(500);
                    $(".rock").fadeOut(500);
                } else {
                    won=true;
                    $(res_div).html("You choose <span id='selected'>Paper</span> and computer choose Rock. You Won!");
                    p1Score += 1;
                    $("#res").show();
                    $("#res").animate({"font-size":"32pt"} ,1500);
                    $("#res").animate({"font-size":"20pt"} ,1500);
                    $(".scissors").fadeOut(500);
                    $(".rock").fadeOut(500);
                }
                break;
            case 2:
                if (p2choice === 3) {
                    $(res_div).html("You choose <span id='selected'>Scissors</span> and computer choose Rock. Computer Won!");
                    p2Score += 1;
                    $("#res").show();
                    $("#res").animate({"font-size":"32pt"} ,1500);
                    $("#res").animate({"font-size":"20pt"} ,1500);
                    $(".paper").fadeOut(500);
                    $(".rock").fadeOut(500);
                } else {
                    won=true;
                    $(res_div).html("You choose <span id='selected'>Scissors</span> and computer choose Paper. You Won!");
                    p1Score += 1;
                    $("#res").show();
                    $("#res").animate({"font-size":"32pt"} ,1500);
                    $("#res").animate({"font-size":"20pt"} ,1500);
                    $(".paper").fadeOut(500);
                    $(".rock").fadeOut(500);
                }
                break;
            case 3:
                if (p2choice === 1) {
                    $(res_div).html("You choose <span id='selected'>Rock</span> and computer choose Paper. Computer Won!");
                    p2Score += 1;
                    $("#res").show();
                    $("#res").animate({"font-size":"32pt"} ,1500);
                    $("#res").animate({"font-size":"20pt"} ,1500);
                    $(".scissors").fadeOut(500);
                    $(".paper").fadeOut(500);
                } else {
                    won=true;
                    $(res_div).html("You choose <span id='selected'>Rock</span> and computer choose Scissors. You Won!");
                    p1Score += 1;
                    $("#res").show();
                    $("#res").animate({"font-size":"32pt"} ,1500);
                    $("#res").animate({"font-size":"20pt"} ,1500);
                    $(".scissors").fadeOut(500);
                    $(".paper").fadeOut(500);                    
                }
                break;
        }
    }
    if (won)
        $("#selected").css("color","#00ff00");
    else
        $("#selected").css("color","red");
    $(p1Score_span).html(p1Score);
    $(p2Score_span).html(p2Score);
};

$(".paper").click(function () {
    calculations(1);
});
$("#choice12").click(function () {
    calculations(1);
});
$(".scissors").click(function () {
    calculations(2);
});
$(".rock").click(function () {
    calculations(3);
});
$("#reset").click(function () {
    clear();
    p1Score = 0;
    p2Score = 0;
    $(p1Score_span).html(p1Score);
    $(p2Score_span).html(p2Score);
    
    $(".paper").fadeIn(500);
    $(".scissors").fadeIn(500);
    $(".rock").fadeIn(500);
    $(res_div).css("display","none");
    
    randGenerator();
});
$("#next").click(function () {
    next();
});