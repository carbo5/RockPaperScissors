//Création de variables pour conserver le score de l'usager et de l'ordinateur
//Récupérer le choix de l'utilisateur
//Générer le choix de l'ordinateur
//Comparer le choix de l'utilisateur et le choix de l'ordinateur
//Augmenter de un le gagnant de la manche
//Vérifier les totaux de chacun pour déterminer un gagnant
//Si gagnant parties terminées, on peut reocmmance une partie ou non selon la réponse du joueur
//Sinon on continue une autre manche 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

console.log(getRandomInt(3));