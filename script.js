let table = [8, 8, 8, 8, 8, 8, 8, 8, 8];

function userInput(idx) {
  let buttonId = 'idx' + idx;
  table[idx] = 1;
  
  document.getElementById(buttonId).innerHTML = '<img src="Images/userInput.png" alt="userInput">';
  document.getElementById(buttonId).disabled = true;
  continueGame();
}

function continueGame() {
  let sum=table[0] + table[1] + table[2] + table[3] + table[4] + table[5] + table[6] + table[7] + table[8];
  if(sum== 65){
    randomAvailabeX();
  }else{
  userWinning();
  }
}


function userWinning() {
  if (table[0] + table[1] + table[2] == 3) {
    return updateScore(0, 1, 2);
  } else if (table[0] + table[3] + table[6] == 3) {
    return updateScore(0, 3, 6);
  } else if (table[0] + table[4] + table[8] == 3) {
    return updateScore(0, 4, 8);
  } else if (table[1] + table[4] + table[7] == 3) {
    return updateScore(1, 4, 7);
  } else if (table[2] + table[5] + table[8] == 3) {
    return updateScore(2, 5, 8);
  } else if (table[2] + table[4] + table[6] == 3) {
    return updateScore(2, 4, 6);
  } else if (table[3] + table[4] + table[5] == 3) {
    return updateScore(3, 4, 5);
  } else if (table[6] + table[7] + table[8] == 3) {
    return updateScore(6, 7, 8);
  } else {
    if ( table[0] + table[1] + table[2] + table[3] + table[4] + table[5] + table[6] + table[7] + table[8]== 5) {
      document.getElementById('tieScore').innerHTML = parseInt(document.getElementById('tieScore').innerHTML) + 1;

      resetGame();
    } else {
      return computerWinning();
    }
  }
}

function updateScore(x, y, z) {
  blinkImage(x, y, z, 1);
  document.getElementById('playerScore').innerHTML = parseInt(document.getElementById('playerScore').innerHTML) + 1;

  resetGame();
}

function computerWinning() {
  if (table[0] + table[1] + table[2] == 8) {
    return checkWinning(0, 1, 2);
  } else if (table[0] + table[3] + table[6] == 8) {
    return checkWinning(0, 3, 6);
  } else if (table[0] + table[4] + table[8] == 8) {
    return checkWinning(0, 4, 8);
  } else if (table[1] + table[4] + table[7] == 8) {
    return checkWinning(1, 4, 7);
  } else if (table[2] + table[5] + table[8] == 8) {
    return checkWinning(2, 5, 8);
  } else if (table[2] + table[4] + table[6] == 8) {
    return checkWinning(2, 4, 6);
  } else if (table[3] + table[4] + table[5] == 8) {
    return checkWinning(3, 4, 5);
  } else if (table[6] + table[7] + table[8] == 8) {
    return checkWinning(6, 7, 8);
  } else {
    return defence();
  }
}

function defence() {
  if (table[0] + table[1] + table[2] == 10) {
    return defenceCheck(0, 1, 2);
  } else if (table[0] + table[3] + table[6] == 10) {
    return defenceCheck(0, 3, 6);
  } else if (table[0] + table[4] + table[8] == 10) {
    return defenceCheck(0, 4, 8);
  } else if (table[1] + table[4] + table[7] == 10) {
    return defenceCheck(1, 4, 7);
  } else if (table[2] + table[5] + table[8] == 10) {
    return defenceCheck(2, 5, 8);
  } else if (table[2] + table[4] + table[6] == 10) {
    return defenceCheck(2, 4, 6);
  } else if (table[3] + table[4] + table[5] == 10) {
    return defenceCheck(3, 4, 5);
  } else if (table[6] + table[7] + table[8] == 10) {
    return defenceCheck(6, 7, 8);
  } else {
    return attack();
  }
}

function attack() {
  if (table[0] + table[1] + table[2] == 16) {
    return attackCheck(0, 1, 2);
  } else if (table[0] + table[3] + table[6] == 16) {
    return attackCheck(0, 3, 6);
  } else if (table[0] + table[4] + table[8] == 16) {
    return attackCheck(0, 4, 8);
  } else if (table[1] + table[4] + table[7] == 16) {
    return attackCheck(1, 4, 7);
  } else if (table[2] + table[5] + table[8] == 16) {
    return attackCheck(2, 5, 8)
  } else if (table[2] + table[4] + table[6] == 16) {
    return attackCheck(2, 4, 6);
  } else if (table[3] + table[4] + table[5] == 16) {
    return attackCheck(3, 4, 5);
  } else if (table[6] + table[7] + table[8] == 16) {
    return attackCheck(6, 7, 8);
  } else {
    return ultraAttack();
  }
}

function ultraAttack() {
  if (table[0] + table[1] + table[2] == 17) {
    return ultraAttackCheck(0, 1, 2);
  } else if (table[0] + table[3] + table[6] == 17) {
    return ultraAttackCheck(0, 3, 6);
  } else if (table[0] + table[4] + table[8] == 17) {
    return ultraAttackCheck(0, 4, 8);
  } else if (table[1] + table[4] + table[7] == 17) {
    return ultraAttackCheck(1, 4, 7);
  } else if (table[2] + table[5] + table[8] == 17) {
    return ultraAttackCheck(2, 5, 8);
  } else if (table[2] + table[4] + table[6] == 17) {
    return ultraAttackCheck(2, 4, 6);
  } else if (table[3] + table[4] + table[5] == 17) {
    return ultraAttackCheck(3, 4, 5);
  } else if (table[6] + table[7] + table[8] == 17) {
    return ultraAttackCheck(6, 7, 8);
  } else {
    return randomAvailabe();
  }
}

function checkWinning(a, b, c) {
  blinkImage(a, b, c, 0);

  if (table[a] != 0) {
    result(a);
  } else if (table[b] != 0) {
    result(b);
  } else if (table[c] != 0) {
    result(c);
  }

  function result(x) {
    table[x] = 0;
    let buttonId = 'idx' + x;
    document.getElementById(buttonId).innerHTML = '<img src="Images/computerInput.png" alt="computerInput">';
    document.getElementById('computerScore').innerHTML = parseInt(document.getElementById('computerScore').innerHTML) + 1;

    document.getElementById(buttonId).disabled = true;

    resetLostGame();
  }

}

function defenceCheck(a, b, c) {
  //345
  if (table[a] != 1) {
    result(a);
  } else if (table[b] != 1) {
    result(b);
  } else if (table[c] != 1) {
    result(c);
  }
  function result(x) {
    table[x] = 0;
    let buttonId = 'idx' + x;
    document.getElementById(buttonId).innerHTML = '<img src="Images/computerInput.png" alt="computerInput">';
    document.getElementById(buttonId).disabled = true;
  }

}

function attackCheck(a, b, c) {
  if (table[a] != 0) {
    result(a);
  } else if (table[b] != 0) {
    result(b);
  } else if (table[c] != 0) {
    result(c);
  }
  function result(x) {
    table[x] = 0;
    let buttonId = 'idx' + x;
    document.getElementById(buttonId).innerHTML = '<img src="Images/computerInput.png" alt="computerInput">';
    document.getElementById(buttonId).disabled = true;
  }
}

function ultraAttackCheck(a, b, c) {
  if (table[a] == 8) {
    result(a);
  } else if (table[b] == 8) {
    result(b);
  } else if (table[c] == 8) {
    result(c);
  }
  function result(x) {
    table[x] = 0;
    let buttonId = 'idx' + x;
    document.getElementById(buttonId).innerHTML = '<img src="Images/computerInput.png" alt="computerInput">';
    document.getElementById(buttonId).disabled = true;
  }
}

function randomAvailabe() {

 function random() {
  let randomNum = Math.floor(Math.random() * 9);

  if (table[randomNum] == 0 || table[randomNum] == 1) {
    return randomChoice(randomNum);
  } else {
    return random();
  }
 }

random();
  
 function randomChoice(x) {
    table[x] = 0;
    let buttonId = 'idx' + x;
    console.log(table);
    document.getElementById(buttonId).innerHTML = '<img src="Images/computerInput.png" alt="computerInput">';

    document.getElementById(buttonId).disabled = true;
  }
}

//random available for user X

function randomAvailabeX() {
return random();
  
 function random() {
  let randomNum = Math.floor(Math.random() * 9);

  if (table[randomNum] != 0 && table[randomNum] != 1) {
    return randomChoice(randomNum);
  } else {
    return random();
  }
 }


  
 function randomChoice(x) {
    table[x] = 0;
    let buttonId = 'idx' + x;
    console.log(table);
    document.getElementById(buttonId).innerHTML = '<img src="Images/computerInput.png" alt="computerInput">';

    document.getElementById(buttonId).disabled = true;
  }
}



function resetGame() {
  var beepSound = document.getElementById('beepAudio');
  beepSound.play();

  setTimeout(newGame, 1500);
}
function newGame() {
  table = [8, 8, 8, 8, 8, 8, 8, 8, 8];

  for (let i = 0; i <= 8; i++) {
    let buttonId = 'idx' + i;
    let button = document.getElementById(buttonId);

    // Clear the inner HTML (remove the image)
    button.innerHTML = '';

    // Re-enable the button
    button.disabled = false;
  }
}

function resetLostGame() {
  var beepSound = document.getElementById('gameLost');
  beepSound.play();
  setTimeout(newGame, 1500);
}

function newGame() {
  table = [8, 8, 8, 8, 8, 8, 8, 8, 8];

  for (let i = 0; i <= 8; i++) {
    let buttonId = 'idx' + i;
    let button = document.getElementById(buttonId);

    // Clear the inner HTML (remove the image)
    button.innerHTML = '';

    // Re-enable the button
    button.disabled = false;
  }
}
function quickReset() {

  var beepSound = document.getElementById('gameLost');
  beepSound.play();

  table = [8, 8, 8, 8, 8, 8, 8, 8, 8];

  for (let i = 0; i <= 8; i++) {
    let buttonId = 'idx' + i;
    let button = document.getElementById(buttonId);

    // Clear the inner HTML (remove the image)
    button.innerHTML = '';

    // Re-enable the button
    button.disabled = false;
  }
}


function blinkImage(x, y, z, a) {
  let buttonId = 'idx' + x;
  let buttonId1 = 'idx' + y;
  let buttonId2 = 'idx' + z;

  if (a == 1) user = "userInput";
  if (a == 0) user = "computerInput";


  document.getElementById(buttonId).innerHTML = `<img src="Images/${user}.png" alt="${user}" class="blinking-image">`;
  document.getElementById(buttonId1).innerHTML = `<img src="Images/${user}.png" alt="${user}" class="blinking-image">`;


  document.getElementById(buttonId2).innerHTML = `<img src="Images/${user}.png" alt="${user}" class="blinking-image">`;


}

/* 3*3 Matrix all possible combinations without repeating:
0 1 2. 0 3 6. 0 4 8
1 4 7. 2 5 8. 2 4 6
3 4 5. 6 7 8.
*/

//num 8 for unoccupied 
//num 1 for player
//num 0 for computer