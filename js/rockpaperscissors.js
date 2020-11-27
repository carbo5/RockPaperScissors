//Création de variables pour conserver le score de l'usager et de l'ordinateur
let scorePlayer = 0;
let scoreComputer = 0;
let round = 0;
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
  let winner = '';
  let summary = '';

  //console.log("Players's choice: " + player);
  //console.log("Computer's choice: " + computer);

  if(player === 'paper' && computer === 'rock'){
    //scorePlayer++;
    summary = "You choose paper and the computer rock, you win this round!"
    winner = 'player';
  }else if(player === 'paper' && computer === 'scissors'){
    //scoreComputer++;
    summary = "You choose paper and the computer scissors, the computer win this round!"
    winner = 'computer';
  }else if(player === 'rock' && computer === 'scissors'){
    //scorePlayer++;
    summary = "You choose rock and the computer scissors, you win this round!"
    winner = 'player';
  }else if(player === 'rock' && computer === 'paper'){
    //scoreComputer++;
    summary = "You choose rock and the computer paper, the computer win this round!"
    winner = 'computer';
  }else if(player === 'scissors' && computer === 'rock'){
    //scoreComputer++;
    summary = "You choose scissors and the computer rock, the computer win this round!"
    winner = 'computer';
  }else if(player === 'scissors' && computer === 'paper'){
    //scorePlayer++;
    summary = "You choose scissors and the computer paper, you win this round!"
    winner = 'player';
  }else{
    summary  = `You choose ${player} and the computer ${computer}, it's as draw!`
    winner ='draw';
  }
    
  round++;
  document.querySelector('#result').innerHTML  +=  `<p>Round ${round}: ${summary}</p>`;
  return winner;
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

  if(scorePlayer === 5){
    document.querySelector('#description').textContent += ` => You win the game!!!!`;
    document.querySelector('button').style.display = "block";  //A finaliser
    remove_images_action()
  }else if(scoreComputer === 5){
    document.querySelector('#description').textContent += ` => The computer win the game!!!`;
    document.querySelector('button').style.display = "block"; // A finaliser
    remove_images_action()
  }
  
}

function remove_images_action(){
  let images = document.querySelectorAll('img');

  images.forEach((image) => {
    image.removeEventListener('click', player_click);
    //image.removeEventListener('transitionend',)
    image.classList.remove('player_select');
    image.classList.remove('golden-border');
  });
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

  /*console.log(this.getAttribute('data-choice'));
  console.log(computer);*/

  const computer_set_choice = document.querySelector(`img[data-comp="${computer}"]`);
  computer_set_choice.classList.add('golden_border');


  const resultRound = playRound(player, computer);
  /*console.log(resultRound);*/
  manageScore(resultRound);

  //console.log(this);
}
  
const images_player = document.querySelectorAll('.player_select');

images_player.forEach(image_player => {
  image_player.addEventListener('click', player_click);
});

function removeTransition(e){
    
  //key.classList.remove('playing');
  if(e.propertyName !== 'box-shadow') return; // Skip it if it's not a transform
  //console.log(this);
  this.classList.remove('golden_border'); //In this case this represent the div of the key (keydown)


  const images_player = document.querySelectorAll('.player_select');

  images_player.forEach(image_player => {
    image_player.classList.remove('golden_border');
  });

}

function reset(){
  scorePlayer = 0;
  scoreComputer = 0;
  round = 0;

  document.querySelector("#description").textContent = "Win 5 rounds and win the game!";
  document.querySelector(".player_score").textContent = "Score: 0";
  document.querySelector(".computer_score").textContent = "Score: 0";
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#result").textContent = "Summary";
  removeTransition(e);

}

document.querySelector('button').addEventListener('click', reset);

const images_computer = document.querySelectorAll('.computer_select');
//console.log(images);

  images_computer.forEach(image =>{
    image.addEventListener('transitionend', removeTransition);
  });
  