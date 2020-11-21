//Création de variables pour conserver le score de l'usager et de l'ordinateur
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
    return 'player';
  }else if(player === 'paper' && computer === 'scissors'){
    return 'computer';
  }else if(player === 'rock' && computer === 'scissors'){
    return 'rock';
  }else if(player === 'rock' && computer === 'paper'){
    return 'computer';
  }else if(player === 'scissors' && computer === 'rock'){
    return 'computer';
  }else if(player === 'scissors' && computer === 'paper'){
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

let startGame = 'play';
//while(startGame === 'play'){
  let gameOver = false;
//  while(!gameOver){
  const resultRound = playRound();
//  }
   console.log(resultRound); 
//}
  