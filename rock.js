const scoreDisplay= document.querySelector("#score-display");
const pickDisplay=document.querySelector("#game-display");
const roundDisplayO=document.querySelector(".round-display");
const playButtons=document.querySelectorAll(".play-button");
const myRound=document.querySelector(".my-round");
const compRound=document.querySelector(".comp-round");
const roundResult=document.querySelector("#first-result");
const reason=document.querySelector(".reason");
const nextRound=document.querySelector(".repeat-btn");
const endGameO=document.querySelector(".game-over");
const gameOver=document.querySelector(".game-over-display");
const playAgainBtn=document.querySelector("#playagain");
const rock=document.querySelector("#rock");
const scissors=document.querySelector("#scissors");
const paper=document.querySelector("#paper");


const rulesMode=document.querySelector(".rules-mode");
const cover=document.querySelector(".cover");
const closeRules=document.querySelector(".close-rules");
const ruleButton=document.querySelector(".rule");



/*what happens after clicking the playagain button*/
playAgainBtn.addEventListener("click", ()=> {
    endGameO.style.display= "none";
    gameOver.style.display= "none";
  roundDisplayO.classList.add("disappear"); /*round result should disppear*/
    scoreDisplay.textContent="0:0";
    humanScore=0;
    computerScore=0;
    pickDisplay.classList.remove("disppear");
})


let humanScore=0;
let computerScore=0;
let humanPick;
let computerPick;
const gameOptions=[ "rock", "paper", "scissors"];


function computerChoice (gameOptions){
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}

/*what happens after clicking the playagain button*/
nextRound.addEventListener("click", ()=>{
    pickDisplay.classList.remove("disappear");
    roundDisplayO.classList.remove("appear");
})

function endGame(){
    const congrats =document.querySelector("#congrats");

    if(humanScore > computerScore){
        congrats.style.color= "hsl(230, 89%, 65%)"
        congrats.textContent= "CONGRATULATIONS! YOU WON"
    }else{
        congrats.style.color= "hsl(349, 70%, 56%)"
        congrats.textContent= "OHH NO! YOU LOST"
    }

    endGameO.style.display= "flex"
    gameOver.style.display= "block"
}

function playRound(humanPick, computerPick) {
    if(humanPick.toLowerCase() == computerPick){
 roundResult.textContent = "IT'S A TIE!";
 reason.textContent ="YOU CHOSE SAME OPTIONS";       
    }else if(
        (humanPick.toLowerCase() == "rock" && computerPick == "scissors") ||
        (humanPick.toLowerCase() == "paper" && computerPick == "rock") ||
        (humanPick.toLowerCase() == "scissors" && computerPick == "paper")
    ){
     humanScore++;
 scoreDisplay.textContent = `${humanScore}:${computerScore}`;
 roundResult.textContent ="YOU WIN!";
 reason.textContent = `${humanPick.toUpperCase()} BEATS ${computerPick.toUpperCase()}`;
    }else if(
        (computerPick.toLowerCase() == "rock" && humanPick == "scissors") ||
        (computerPick.toLowerCase() == "paper" && humanPick == "rock") ||
        (computerPick.toLowerCase() == "scissors" && humanPick == "paper")
    ){
        computerScore++;
        scoreDisplay.textContent = `${humanScore}:${computerScore}`;
        roundResult.textContent ="YOU LOSE!";
        reason.textContent = `${computerPick.toUpperCase()} BEATS ${humanPick.toUpperCase()}`;   
    }else{
        return "Incorrect choice"
    }
}
/*To display choice of human and computer*/
function updateRoundDisplay(humanPick, computerPick){
 myRound.className = "play-choice";
 compRound.className= "play-choice";

 myRound.classList.add (`choice-${humanPick}`);
 myRound.innerHTML=""
 myRound.innerHTML=`<div class="choice-btn"><img src="images/icon-${humanPick}.svg" alt=""></div>`

 compRound.classList.add (`choice-${computerPick}`);
 compRound.innerHTML=""
 compRound.innerHTML=`<div class="choice-btn"><img src="images/icon-${computerPick}.svg" alt=""></div>`

}
/*The game function deals with human and computer selection as well as game options*/
function game(playerSelection){
humanPick=playerSelection
computerPick=computerChoice(gameOptions);
playRound(humanPick, computerPick);
updateRoundDisplay(humanPick, computerPick)
}

/*what should happen after clicking the play button*/
playButtons.forEach(playButton => playButton.addEventListener("click", ()=> {
    let playerSelection=playButton.attributes.id.textContent
    
    game(playerSelection)

    pickDisplay.classList.add("disappear");
    roundDisplayO.classList.add("appear");  
    
    if (computerScore ===10 || humanScore ===10){
        setTimeout(endGame, 600)
    }
}))


ruleButton.addEventListener("click", ()=>{
rulesMode.classList.add("show")
cover.classList.add("show")    
})

closeRules.addEventListener("click", ()=>{
    rulesMode.classList.remove("show")
    cover.classList.remove("show")    
    })

    cover.addEventListener("click", ()=>{
        rulesMode.classList.remove("show")
        cover.classList.remove("show")    
        })




