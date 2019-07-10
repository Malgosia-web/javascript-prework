let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

if(randomNumber == '1'){
  getMoveName = 'kamień'
}
else if(randomNumber == '2'){
  getMoveName = 'papier'
}
else if(randomNumber == '3'){
  getMoveName == 'nożyce'
}
/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);

if(( computerMove == 'kamień' && playerMove == 'papier')||( computerMove == 'nożyce' && playerMove == 'kamień')||( computerMove == 'papier' && playerMove == 'nożyce')){
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
}
