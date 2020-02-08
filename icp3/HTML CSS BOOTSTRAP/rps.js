
var choice2 = Math.random();
if (choice2 < 0.34) {
    choice2 = 'rock';
} else if(choice2 <= 0.67) {
    choice2 = 'paper';
} else {
    choice2 = 'scissors';
}

function game(inp){
    choice1 = inp;

    if(choice1 === "rock") {
        if(choice2 === "scissors") {
            alert( "rock wins scissors");
        } else if (choice2 === "paper"){
            alert("paper wins rock");
        }
        else{
            alert("The result is a tie");
        }

    }
    if(choice1 === "paper") {
        if (choice2 === "rock") {
            alert("paper wins rock");
        } else if (choice2 === "scissors") {
                alert("scissors wins paper");
            }
        else{
            alert("The result is a tie");
        }
        }

    if (choice1 === "scissors"){

        if(choice2 === "rock") {
                alert("rock wins scissors");
            } else if(choice2 === "paper") {
                    alert("scissors wins paper");
                }
        else{
            alert("The result is a tie");
        }
                }
   }

