//Création de variables pour conserver le score de l'usager et de l'ordinateur
let scorePlayer = 0;
let scoreComputer = 0;
//Récupérer le choix de l'utilisateur
//Générer le choix de l'ordinateur
//Comparer le choix de l'utilisateur et le choix de l'ordinateur
//Augmenter de un le gagnant de la manche
//Vérifier les totaux de chacun pour déterminer un gagnant
//Si gagnant parties terminées, on peut reocmmance une partie ou non selon la réponse du joueur
//Sinon on continue une autre manche 

function playRound(){
  const player = playerChoice();
  const computer = computerPlay();

  console.log(player);
  console.log(computer);

  if(player === 'paper' && computer === 'rock'){
    //scorePlayer++;
    return 'player';
  }else if(player === 'paper' && computer === 'scissors'){
    //scoreComputer++;
    return 'computer';
  }else if(player === 'rock' && computer === 'scissors'){
    //scorePlayer++;
    return 'player';
  }else if(player === 'rock' && computer === 'paper'){
    //scoreComputer++;
    return 'computer';
  }else if(player === 'scissors' && computer === 'rock'){
    //scoreComputer++;
    return 'computer';
  }else if(player === 'scissors' && computer === 'paper'){
    //scorePlayer++;
    return 'player';
  }else{
    return 'draw';
  }
    

}

function playerChoice(){
   const the_player_choice = prompt("Choose: Paper, Rock or Scissors")
   return the_player_choice.toLowerCase();
}


function computerPlay(){
  const resultRandom = getRandomInt(3);
  let computerChoice

  switch (resultRandom){
    case 0: computerChoice = 'rock';
      break;
    case 1: computerChoice = 'paper';
      break;
    case 2: computerChoice = 'scissors';
      break;
    default: computerChoice = 'Unknown choice';
      break;
  }

  return computerChoice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function manageScore(resultOfTheRound){
  if(resultOfTheRound === 'player'){
    scorePlayer++;
  }else if(resultOfTheRound === 'computer'){
    scoreComputer++;
  }  
}

let startGame = 'play';
//while(startGame === 'play'){
  let gameOver = false;
//  while(!gameOver){
  while(scorePlayer < 5 && scoreComputer < 5){
    const resultRound = playRound();
    manageScore(resultRound);
    console.log("Player: " + scorePlayer + " " + "Computer: " + scoreComputer);
  }

  console.log("The game is over and the " + ((scorePlayer === 5) ? " player WIN!!!" : " the computer WIN!"))
    
  
//  }
   //console.log(resultRound); 
//}
  