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

let playerMove = getMoveName(randomNumber);

printMessage('Twój ruch to: ' + playerMove);

/*if(( computerMove == 'kamień' && playerMove == 'papier')||( computerMove == 'nożyce' && playerMove == 'kamień')||( computerMove == 'papier' && playerMove == 'nożyce')){
  printMessage('Ty wygrywasz!');
}
if(( computerMove == 'kamień' && playerMove == 'nożyce')||( computerMove == 'nożyce' && playerMove == 'papier')||( computerMove == 'papier' && playerMove == 'kamień')){
  printMessage('Ty przegrywasz!');
}
if(( computerMove == 'kamień' && playerMove == 'kamień')||( computerMove == 'nożyce' && playerMove == 'nożyce')||( computerMove == 'papier' && playerMove == 'papier')){
  printMessage('Remis!');
}
if(( computerMove == 'kamień' && playerMove == 'nieznany ruch')||( computerMove == 'nożyce' && playerMove == 'nieznany ruch')||( computerMove == 'papier' && playerMove == 'nieznany ruch')){
  printMessage('zła liczba!');
}*/

function displayResult(computerMove, playerMove){
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

  if(( computerMove == 'kamień' && playerMove == 'papier')||( computerMove == 'nożyce' && playerMove == 'kamień')||( computerMove == 'papier' && playerMove == 'nożyce')){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}
