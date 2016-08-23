// document.addEventListener('DOMContentLoaded',function(){

var grids = document.getElementsByClassName('grid');
var turn = 0;
var mode = 0;
activePlayer = {};
lastPlayer = {};
var y = chooseRandomNumber();

for(i=0;i<grids.length;i++){
    grids[i].addEventListener('click',checkOccupancy,false);
  }

document.getElementById('resetButton').addEventListener('click',resetButton,false);

document.getElementById('singleplayer').addEventListener('click',singlePlayer,false);
function singlePlayer() {
    document.getElementById('singleplayer').style.border = "solid red";
    document.getElementById('multiplayer').style.border = "";
    document.querySelector('.player-announcement').style.color = "red";
    document.querySelector('.player-announcement').textContent = "OKAY! Player, it's your move";
    document.getElementById('p1icon').style.border = "red solid";
    mode = "singleplayer";
}

document.getElementById('multiplayer').addEventListener('click',multiPlayer,false);
function multiPlayer() {
    document.getElementById('multiplayer').style.border = "solid red";
    document.getElementById('singleplayer').style.border = "";
    document.querySelector('.player-announcement').style.color = "red";
    document.querySelector('.player-announcement').textContent = "Player 1! You start!";
    document.getElementById('p1icon').style.border = "red solid";
    mode = "multiplayer";
}

function checkOccupancy() {
  if( mode === "singleplayer"|| mode === "multiplayer"){
    if (this.value == undefined && !(checkWinner(grids))) {
      checkPlayer();
      isAiMode (this);
    } else if (this.value == activePlayer.value || this.value == lastPlayer.value){
        document.querySelector('.player-announcement').textContent = "Cell is occupied";
    }
  } else document.querySelector('.player-announcement').textContent = "Select Game Mode";
}

function checkPlayer (){
  if ((turn%2) == 0) {
      activePlayer.value ="Player 1";
      activePlayer.assignedClassName = "grid turnRed";
      activePlayer.activeIconId = "p2icon";
      activePlayer.announcement = "Player's 2 turn";
      activePlayer.WinningAnnouncement = "Player 1 wins!"
      lastPlayer.value = "Player 2";
      lastPlayer.activeIconId = "p1icon";
  } else {
      activePlayer.value ="Player 2";
      activePlayer.assignedClassName = "grid turnGreen";
      activePlayer.activeIconId = "p1icon";
      activePlayer.announcement = "Player's 1 turn";
      activePlayer.WinningAnnouncement = "Player 2 wins!"
      lastPlayer.value = "Player 1";
      lastPlayer.activeIconId = "p2icon";
  }
}

function isAiMode (cell){
  if (mode === "singleplayer" && activePlayer.value === "Player 2" ){
    chooseRandomCell();
  } else if (mode === "singleplayer" && activePlayer.value === "Player 1" && turn<= 7){
    checkCell(cell);
    if (!checkWinner(grids) && !checkEmptyCells(grids)){
      checkPlayer ();
      chooseRandomCell();
     }
  } else

  checkCell(cell);
}

function chooseRandomCell (){
  while (grids[y].value != undefined){
    y = chooseRandomNumber();
  }  checkCell(grids[y]);
}

function chooseRandomNumber() {
    return Math.floor(Math.random() * (9)) + 0;
}

function checkCell(cell){
  cell.className = activePlayer.assignedClassName;
  cell.value = activePlayer.value;
  if (!checkWinner(grids) && checkEmptyCells(grids)){
    document.querySelector('.player-announcement').textContent = "It's a draw!";
  } else if (checkWinner(grids)){
    document.querySelector('.player-announcement').textContent = activePlayer.WinningAnnouncement;
    document.getElementById(lastPlayer.activeIconId).style.width = "20%";
    } else {
      document.querySelector('.player-announcement').textContent = activePlayer.announcement;
      document.getElementById(activePlayer.activeIconId).style.border = "red solid";
      document.getElementById(lastPlayer.activeIconId).style.border = "";
      turn++;
  }
}

//returns false if there are still empty cells
function checkEmptyCells (array){
  for (j=0; j< array.length; j++){
    if (array[j].value == undefined)  {
      return false;
    }
  }
  document.getElementById(activePlayer.activeIconId).style.border = "";
  document.getElementById(lastPlayer.activeIconId).style.border = "";
  return true;
}

function checkWinner(array) {
  if (checkRow(array) || checkCol(array) || checkDiagonal(array)){
    return true;
  } else return false;
}

function checkRow(array){
  if ((array[0].value == array[1].value && array[0].value == array[2].value && array[0].value != undefined) ||
      (array[3].value == array[4].value && array[3].value == array[5].value && array[3].value != undefined) ||
      (array[6].value == array[7].value && array[6].value == array[8].value && array[6].value != undefined) ){
        return true;
      } else return false;
}

function checkCol(array){
  if ((array[0].value == array[3].value && array[0].value == array[6].value && array[0].value != undefined) ||
      (array[1].value == array[4].value && array[1].value == array[7].value && array[1].value != undefined) ||
      (array[2].value == array[5].value && array[2].value == array[8].value && array[2].value != undefined) ){
        return true;
      } else return false;
}

function checkDiagonal(array){
  if ((array[0].value == array[4].value && array[0].value == array[8].value && array[0].value != undefined) ||
      (array[6].value == array[4].value && array[6].value == array[2].value && array[6].value != undefined) ){
        return true;
      } else return false;
}

function resetButton (){
  for (k=0;k<grids.length;k++){
    grids[k].value = undefined;
    grids[k].className = 'grid';
    document.getElementById('multiplayer').style.border = "";
    document.getElementById('singleplayer').style.border = "";
    turn = 0;
    mode = 0;
    document.querySelector('.player-announcement').style.color = "orange";
    document.querySelector('.player-announcement').textContent = "Select Game Mode";
    document.getElementById('p1icon').style.border = "";
    document.getElementById('p2icon').style.border = "";
    document.getElementById(lastPlayer.activeIconId).style.width = "15%";
    document.getElementById(activePlayer.activeIconId).style.width = "15%";
  }
}
