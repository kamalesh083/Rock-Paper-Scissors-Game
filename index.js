let playGame=confirm("Shall We Play Rock ,Paper or Scissor?");
if(playGame){
    let playersChoice=prompt("Enter Rock, Paper or Scissor");
    if(playersChoice){
        let playerOne= playersChoice.trim().toLowerCase();
        if(
            playerOne==="rock"||
            playerOne==="scissor"||
            playerOne==="paper"
        )
        {
            let computerChoice= Math.floor(Math.random()*3+1);
            let computer= computerChoice===1
            ?"rock":computerChoice===2
            ?"scissor":"paper";

            let result=
            playerOne===computer
            ?"Tie!"
            :playerOne==="rock" && computer==="paper"?
            `playerOne: ${playerOne}\n computer: ${computer}\nComputer Wins!!`
            :playerOne==="paper" && computer==="scissor"?
            `playerOne: ${playerOne}\n computer: ${computer}\nComputer Wins!!`
            :playerOne==="scissor" && computer==="rock"?
            `playerOne: ${playerOne}\n computer: ${computer}\n Computer Wins!!`
            :`playerOne: ${playerOne}\n computer: ${computer}\n Player Wins!!`;
        alert(result);
        let playAgain=confirm("Play Again ?");
        playAgain ? location.reload():alert("Ok Thanks For Playing !!!");
    }
        else{
            alert("You didn't Entered Rock, Paper or scissor");

        }

    }
    else{
        alert("I Think You Changed Your Mind . May Be Next time");

    }

}
else{
    alert("Ok ,May Be Next Time ");
 
}