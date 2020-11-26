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

//function managing a round
function playRound(player, computer){
  //const player = playerChoice();
  

  //console.log("Players's choice: " + player);
  //console.log("Computer's choice: " + computer);

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

//function giving the choice of the player
/*function playerChoice(){
   const the_player_choice = prompt("Choose: Paper, Rock or Scissors")
   return the_player_choice.toLowerCase();
}*/

//function giving the choice of the computer
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

//function giving a random number between 0 and max exclusive
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//function incrementing the score of the player or the computer 
function manageScore(resultOfTheRound){
  if(resultOfTheRound === 'player'){
    scorePlayer++;
    document.querySelector('.player_score').textContent = `Score: ${scorePlayer}`;
  }else if(resultOfTheRound === 'computer'){
    scoreComputer++;
    document.querySelector('.computer_score').textContent = `Score: ${scoreComputer}`;
  }  
}

//*************This is the main of the game**************************
 /* console.log("Good luck to the player, the computer is ready!!!");
  while(scorePlayer < 5 && scoreComputer < 5){
    const resultRound = playRound();
    manageScore(resultRound);
    console.log("Player: " + scorePlayer + " " + "Computer: " + scoreComputer);
  }

  console.log("The game is over and the " + ((scorePlayer === 5) ? "player WIN!!!" : "computer WIN!"))*/
//*************This is theend of the main */

function player_click(){
  
  this.classList.add('golden_border');
  
  const computer = computerPlay();
  const player = this.getAttribute('data-choice')

  console.log(this.getAttribute('data-choice'));
  console.log(computer);

  const computer_set_choice = document.querySelector(`img[data-comp="${computer}"]`);
  computer_set_choice.classList.add('golden_border');


  const resultRound = playRound(player, computer);
  console.log(resultRound);
  manageScore(resultRound);

  //console.log(this);
}
  
const images_player = document.querySelectorAll('.player_select');

images_player.forEach(image_player => {
  image_player.addEventListener('click', player_click);
});
  