{ function playGame(playerInput){
  clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const getMoveName = function(randomNumber){
      if(randomNumber == 1){
        return 'kamień';
      } else if(randomNumber == 2){
        return 'papier'
      } else if(randomNumber == 3){
        return 'nożyce'
      }
    }
    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    console.log('Gracz wybrał: ' + playerInput);

    const displayResult = function(){
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
    }
    document.getElementById('play-rock').addEventListener('click', function (){ playGame(1) });
    document.getElementById('play-paper').addEventListener('click', function (){ playGame(2) });
    document.getElementById('play-scissors').addEventListener('click', function (){ playGame(3) });
}
