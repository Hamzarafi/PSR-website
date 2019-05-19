/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var p1Score = 0;
var p2Score = 0;
var p1Score_span = document.getElementById("p1Score");
var p2Score_span = document.getElementById("p2Score");
var res_div = document.getElementById("res");
var paper_div = document.getElementById("choice1");
var scissors_div = document.getElementById("choice2");
var rock_div = document.getElementById("choice3");
var reset_div = document.getElementById("reset");

function rndChoice(){
    var rndNum = Math.floor(Math.random() * 3) + 1;
    return rndNum;
};
function calculations(p1choice){
    var p2choice = rndChoice();
    var won = false;
    $(paper_div).css("border","3px solid black");
    $(scissors_div).css("border","3px solid black");
    $(rock_div).css("border","3px solid black");
    if (p1choice === p2choice){
        $(res_div).html("Both choose the same. Draw!");
    }
    else{
        switch (p1choice){
            case 1:
                if(p2choice === 2){
                    $(res_div).html("You choose <span id='selected'>Paper</span> and computer choose Scissors. Computer Won!");
                    p2Score += 1;
                    $(paper_div).css("border","4px solid red");
                }
                else {
                    $(res_div).html("You choose <span id='selected'>Paper</span> and computer choose Rock. You Won!");
                    p1Score += 1;
                    $(paper_div).css("border","4px solid #00ff00");
                    won=true;
                }
                break;
            case 2:
                if(p2choice === 3){
                    $(res_div).html("You choose <span id='selected'>Scissors</span> and computer choose Rock. Computer Won!");
                    p2Score += 1;
                    $(scissors_div).css("border","4px solid red");
                }
                else {
                    $(res_div).html("You choose <span id='selected'>Scissors</span> and computer choose Paper. You Won!");
                    p1Score += 1;
                    $(scissors_div).css("border","4px solid #00ff00");
                    won=true;
                }
                break;
            case 3:
                if(p2choice === 1){
                    $(res_div).html("You choose <span id='selected'>Rock</span> and computer choose Paper. Computer Won!");
                    p2Score += 1;
                    $(rock_div).css("border","4px solid red");
                }
                else {
                    $(res_div).html("You choose <span id='selected'>Rock</span> and computer choose Scissors. You Won!");
                    p1Score += 1;
                    $(rock_div).css("border","4px solid #00ff00");
                    won=true;
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
paper_div.addEventListener('click',function(){
    calculations(1); 
});
scissors_div.addEventListener('click',function(){
    calculations(2);
});
rock_div.addEventListener('click',function(){
    calculations(3);
});
reset_div.addEventListener('click',function(){
    p1Score = 0;
    p2Score = 0;
    $(p1Score_span).html(p1Score);
    $(p2Score_span).html(p2Score);
    $(paper_div).css("border","3px solid black");
    $(scissors_div).css("border","3px solid black");
    $(rock_div).css("border","3px solid black");
    $(res_div).html("");
});