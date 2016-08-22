// document.addEventListener('DOMContentLoaded',function(){

var grids = document.getElementsByClassName('grid');
var turn = 0;
var mode = 0;

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
      checkCell (this);
    } else if (this.value == 'x' || this.value =='o'){
        document.querySelector('.player-announcement').textContent = "Cell is occupied";
    }
  } else document.querySelector('.player-announcement').textContent = "Select Game Mode";
}

function checkCell(cell){
  if( (turn%2) ===0 ) {
    cell.className = 'grid turnBlue';
    cell.value = 'x';
      if (!checkWinner(grids)){
          // checkDraw(grids);
          document.querySelector('.player-announcement').textContent = "Player's 2 turn";
          document.getElementById('p2icon').style.border = "red solid";
          document.getElementById('p1icon').style.border = "";
          turn++;
      } else {
          document.querySelector('.player-announcement').textContent = "Player 1 Wins!";
      }
  } else {
    cell.className = 'grid turnGreen';
    cell.value = 'o';
      if (!checkWinner(grids)){
          // checkDraw(grids);
          document.querySelector('.player-announcement').textContent = "Player's 1 turn";
          document.getElementById('p1icon').style.border = "red solid";
          document.getElementById('p2icon').style.border = "";
          turn++;
      } else {
          document.querySelector('.player-announcement').textContent = "Player 2 Wins!";
      }
  }
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
  }
}

// returns false if there are still empty cells
// function checkDraw (array){
//   for (j=0; j< array.length; j++){
//    if (array[j] != undefined)  {
//      window.alert('its a draw!');
//      return false;
//    }
//    return true;
//   }
// }

// function findWithAttr(array, attr, value) {
//     for(var i = 0; i < array.length; i += 1) {
//         if(array[i][attr] === value) {
//             return i;
//         }
//     }
//     return -1;
// }

// var arr = Array.from(grids);
// arr.splice(3,1);
