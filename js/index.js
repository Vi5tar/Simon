var simonSound1 = document.getElementById("simonSound1"); //stores simonSound1
var simonSound2 = document.getElementById("simonSound2"); //stores simonSound2
var simonSound3 = document.getElementById("simonSound3"); //stores simonSound3
var simonSound4 = document.getElementById("simonSound4"); //stores simonSound4
var simonMoveList = []; //stores the moves Simon has made
var playerMoveList = []; //stores the moves the player has made
var moveChecker = 0; //used to check that the arrays simonMoveList and playerMoveList are equal.
//increments as the player selects colors and compares the moves to Simons.
//ie: simonMoveList[moveChecker] == playerMoveList[moveChecker]
var step = 0; // tracks what step/how many colors Simon is on
var tenSpot = 0; //holds a zero to display in the tenspot
var strictMode = 0; //toggles strict mode. 0 = off 1 = on

//plays simonSound1
function playSound1() {
  simonSound1.play();
}

//plays simonSound2
function playSound2() {
  simonSound2.play();
}

//plays simonSound3
function playSound3() {
  simonSound3.play();
}

//plays simonSound4
function playSound4() {
  simonSound4.play();
}

//executes when the player clicks green. records the selection. compares it to Simons color
//sequence. if it doesn't match alerts the player of the error. if all moves match executes
//Simons move
function playerPress1() {
  playerMoveList.push(1);
  console.log(playerMoveList);
  moveValidate();
  isItSimonsTurn();
}

//executes when the player clicks red. records the selection. compares it to Simons color
//sequence. if it doesn't match alerts the player of the error. if all moves match executes
//Simons move
function playerPress2() {
  playerMoveList.push(2);
  console.log(playerMoveList);
  moveValidate();
  isItSimonsTurn();
}

//executes when the player clicks blue. records the selection. compares it to Simons color
//sequence. if it doesn't match alerts the player of the error. if all moves match executes
//Simons move
function playerPress3() {
  playerMoveList.push(3);
  console.log(playerMoveList);
  moveValidate();
  isItSimonsTurn();
}

//executes when the player clicks yellow. records the selection. compares it to Simons color
//sequence. if it doesn't match alerts the player of the error. if all moves match executes
//Simons move
function playerPress4() {
  playerMoveList.push(4);
  console.log(playerMoveList);
  moveValidate();
  isItSimonsTurn();
}

//checks the players selection against simons color sequence. if it doesnt match executes
//wrongMove which alerts the player of the error. if it does match increments moveChecker.
function moveValidate() {
  if (playerMoveList[moveChecker] != simonMoveList[moveChecker]) {
    simonBoard();
    playerMoveList = [];
    wrongMove();
  } else {
    moveChecker++;
  }
}

//makes button 1 (green) look as though it's being pressed down. then executes playSound1() which
//plays simonSound1
function computerButton1() {
  $("#buttonCluster").html(
    "<div id='button1' class='button1Active'></div>" +
      "<div id='button1' class='simonButton2'></div>" +
      "<div id='button1' class='simonButton3'></div>" +
      "<div id='button1' class='simonButton4'></div>"
  );
  playSound1();
}

//makes button 1 (green) look normal (not clicked).
function normalComputerButton1() {
  $("#buttonCluster").html(
    "<div id='button1' class='simonButton1'></div>" +
      "<div id='button1' class='simonButton2'></div>" +
      "<div id='button1' class='simonButton3'></div>" +
      "<div id='button1' class='simonButton4'></div>"
  );
}

//simulates button 1 (green) being pressed.
function computerPress1() {
  computerButton1();
  setTimeout(function() {
    normalComputerButton1();
  }, 500);
}

//makes button 2 look as though it's being pressed down. then executes playSound2() which plays
//simonSound2
function computerButton2() {
  $("#buttonCluster").html(
    "<div id='button1' class='simonButton1'></div>" +
      "<div id='button2' class='button2Active'></div>" +
      "<div id='button1' class='simonButton3'></div>" +
      "<div id='button1' class='simonButton4'></div>"
  );
  playSound2();
}

//makes button 2 (red) look normal (not clicked).
function normalComputerButton2() {
  $("#buttonCluster").html(
    "<div id='button1' class='simonButton1'></div>" +
      "<div id='button2' class='simonButton2'></div>" +
      "<div id='button1' class='simonButton3'></div>" +
      "<div id='button1' class='simonButton4'></div>"
  );
}

//simulates button 2 (red) being pressed.
function computerPress2() {
  computerButton2();
  setTimeout(function() {
    normalComputerButton2();
  }, 500);
}

//makes button 3 look as though it's being pressed down. then executes playSound3() which plays
//simonSound3
function computerButton3() {
  $("#buttonCluster").html(
    "<div id='button1' class='simonButton1'></div>" +
      "<div id='button1' class='simonButton2'></div>" +
      "<div id='button3' class='button3Active'></div>" +
      "<div id='button1' class='simonButton4'></div>"
  );
  playSound3();
}

//makes button 3 (blue) look normal (not clicked).
function normalComputerButton3() {
  $("#buttonCluster").html(
    "<div id='button1' class='simonButton1'></div>" +
      "<div id='button1' class='simonButton2'></div>" +
      "<div id='button3' class='simonButton3'></div>" +
      "<div id='button1' class='simonButton4'></div>"
  );
}

//simulates button 3 (blue) being pressed.
function computerPress3() {
  computerButton3();
  setTimeout(function() {
    normalComputerButton3();
  }, 500);
}

//makes button 4 look as though it's being pressed down. then executes playSound4() which plays
//simonSound4
function computerButton4() {
  $("#buttonCluster").html(
    "<div id='button1' class='simonButton1'></div>" +
      "<div id='button1' class='simonButton2'></div>" +
      "<div id='button1' class='simonButton3'></div>" +
      "<div id='button4' class='button4Active'></div>"
  );
  playSound4();
}

//makes button 4 (yellow) look normal (not clicked).
function normalComputerButton4() {
  $("#buttonCluster").html(
    "<div id='button1' class='simonButton1'></div>" +
      "<div id='button1' class='simonButton2'></div>" +
      "<div id='button1' class='simonButton3'></div>" +
      "<div id='button4' class='simonButton4'></div>"
  );
}

//simulates button 4 (yellow) being pressed.
function computerPress4() {
  computerButton4();
  setTimeout(function() {
    normalComputerButton4();
  }, 500);
}

//makes all buttons look as though they are being pressed down. then executes playSound1-4() which
//plays simonSound1-4
function wrongButton() {
  $("#buttonCluster").html(
    "<div id='button1' class='button1Active'></div>" +
      "<div id='button1' class='button2Active'></div>" +
      "<div id='button1' class='button3Active'></div>" +
      "<div id='button4' class='button4Active'></div>"
  );
  playSound1();
  playSound2();
  playSound3();
  playSound4();
}

//simulates all buttons being pressed down and then released
function wrongPress() {
  wrongButton();
  setTimeout(function() {
    normalComputerButton4();
  }, 500);
}

//simulates all buttons being pressed 2 times in a row one second apart to indicate that a wrong
//move has been made. resets moveChecker to 0. if strict mode is 0/off reiterates simon's moves.
//if strict mode is 1/on restarts the game.
function wrongMove() {
  $("#number").html(":(");
  wrongPress();
  setTimeout(function() {
    wrongPress();
  }, 1000);
  moveChecker = 0;
  if (strictMode == 0) {
    setTimeout(function() {
      doubleDigits();
      displaySimonsMoves();
    }, 2000);
  } else if (strictMode == 1) {
    setTimeout(function() {
      startNewGame();
    }, 2000);
  }
}

//gets a random integer between min and max. min and max included
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// executes Simons turn. randomly attains a number 1-4. pushes that number to simonMoveList.
//increments step by 1 and updates the html with the new number. iterates through simonMoveList and
//simulates a button press for each move.
function simonTurn() {
  var random = getRandomIntInclusive(1, 4);
  simonMoveList.push(random);
  step++;
  doubleDigits();
  displaySimonsMoves();
}

//makes sure the step counter always displays 2 digits
function doubleDigits() {
  if (step < 10) {
    $("#number").html(tenSpot + "" + step);
  } else {
    $("#number").html(step);
  }
}

//checks if the player has won. succesfully executed 20 steps. also checks if the player has
//executed the same amount of steps as Simon. if so executes Simons turn, resets playerMoveList,
//and resets moveChecker. passes the board to simon.
function isItSimonsTurn() {
  if (simonMoveList.length == playerMoveList.length && step == 20) {
    playerWin();
  } else if (simonMoveList.length == playerMoveList.length) {
    simonBoard();
    setTimeout(function() {
      simonTurn();
    }, 1000);
    playerMoveList = [];
    moveChecker = 0;
    setTimeout(function() {
      simonBoard();
    }, 900);
  }
}

//resets simonsMoveList, step, playerMoveList, and moveChecker. executes simonTurn() to initiate
//a new game
function startNewGame() {
  simonMoveList = [];
  step = 0;
  playerMoveList = [];
  moveChecker = 0;
  simonTurn();
}

//iterates through simonMoveList and simulates a button press for each move then passes the
//board to the player
function displaySimonsMoves() {
  for (var i = 0; i <= simonMoveList.length; i++) {
    switch (simonMoveList[i]) {
      case 1:
        setTimeout(function() {
          computerPress1();
        }, 1500 * i);
        break;
      case 2:
        setTimeout(function() {
          computerPress2();
        }, 1500 * i);
        break;
      case 3:
        setTimeout(function() {
          computerPress3();
        }, 1500 * i);
        break;
      case 4:
        setTimeout(function() {
          computerPress4();
        }, 1500 * i);
        break;
      default:
        setTimeout(function() {
          playerBoard();
        }, 1500 * i - 800);
        break;
    }
  }
}

//simulates button presses in an upbeat quick succession to indicate a win
function playerWin() {
  $("#number").html(":D");
  for (var k = 1; k <= 8; k++) {
    switch (k) {
      case 1:
      case 5:
        setTimeout(function() {
          computerPress4();
        }, 300 * k);
        break;
      case 2:
      case 6:
        setTimeout(function() {
          computerPress2();
        }, 300 * k);
        break;
      case 3:
      case 7:
        setTimeout(function() {
          computerPress3();
        }, 300 * k);
        break;
      case 4:
      case 8:
        setTimeout(function() {
          computerPress1();
        }, 300 * k);
        break;
    }
  }
  setTimeout(function() {
    startNewGame();
  }, 4000);
}

//makes the buttons unclickable.
function simonBoard() {
  $("#buttonCluster").html(
    "<div id='button1' class='simonButton1'></div><div id='button2' class='simonButton2'></div><div id='button3' class='simonButton3'></div><div id='button4' class='simonButton4'></div>"
  );
}

//makes the buttons clickable.
function playerBoard() {
  $("#buttonCluster").html(
    "<div id='button1' class='button1' onmousedown='playSound1()' onclick='playerPress1()'></div><div id='button2' class='button2' onmousedown='playSound2()' onclick='playerPress2()'></div><div id='button3' class='button3'onmousedown='playSound3()' onclick='playerPress3()'></div><div id='button4' class='button4'onmousedown='playSound4()' onclick='playerPress4()'></div>"
  );
}

//turns strict mode on and changes the button
function strictOn() {
  strictMode = 1;
  $("#strictButton").html("<button onclick='strictOff()'>Strict</button>");
  $("#strictLed").html("<div class='strictLedOn'></div>");
}

//turns strict mode off and changes the button
function strictOff() {
  strictMode = 0;
  $("#strictButton").html("<button onclick='strictOn()'>Strict</button>");
  $("#strictLed").html("<div class='strictLedOff'></div>");
}