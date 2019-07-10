let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(randomNumber){
  if(randomNumber == 1){
    return 'kamień';
  } else if(randomNumber == 2){
    return 'papier'
  } else if(randomNumber == 3){
    return 'nożyce'
  }
}

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

function displayResult(ComputerMove, PlayerMove){
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
   if((computerMove == 'kamień' && playerMove == 'papier')||(computerMove == 'nożyce' && playerMove == 'kamień')||(computerMove == 'papier' && playerMove == 'nożyce')){
    printMessage('Ty wygrywasz!');
  } else if((computerMove == 'kamień' && playerMove == 'kamień')||(computerMove == 'nożyce' && playerMove == 'nożyce')||(computerMove == 'papier' && playerMove == 'papier')){
    printMessage('Remis!');
  } else if((computerMove == 'kamień' && playerMove == 'nożyce')||(computerMove == 'nożyce' && playerMove == 'papier')||(computerMove == 'papier' && playerMove == 'kamień')){
    printMessage('Tym razem przegrywasz :(');
  }
}

displayResult ();
