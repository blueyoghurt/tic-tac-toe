var grids = document.getElementsByClassName('grid');
var turn = 0;
// player1moves=[];
// player2moves=[];
// occupiedCell =[];
// console.log (grids);

for(var i=0;i<grids.length;i++){
    grids[i].addEventListener('click',checkcell,false);
}

function checkturn(){
  turn++;
  checkcell;
}

function checkcell(){
  if( (turn%2) ===0 ) {
    this.className = 'grid turnBlue';
    this.value = 'x';
      if (!checkWinner(grids)){
          document.querySelector('.player-announcement').textContent = "Player's 2 turn";
          turn++;
      } else {
          document.querySelector('.player-announcement').textContent = "Player 1 Wins!";
      }
  } else {
    this.className = 'grid turnGreen';
    this.value = 'o';
      if (!checkWinner(grids)){
          document.querySelector('.player-announcement').textContent = "Player's 1 turn";
          turn++;
      } else {
          document.querySelector('.player-announcement').textContent = "Player 2 Wins!";
      }
  }
}

function checkWinner(array) {
  if (checkRow(array) || checkCol(array) || checkDiagonal(array)){
    window.alert('We have a winner!');
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
      (array[2].value == array[8].value && array[2].value == array[8].value && array[2].value != undefined) ){
        return true;
      } else return false;
}

function checkDiagonal(array){
  if ((array[0].value == array[4].value && array[0].value == array[8].value && array[0].value != undefined) ||
      (array[6].value == array[4].value && array[6].value == array[2].value && array[6].value != undefined) ){
        return true;
      } else return false;
}

// function findWithAttr(array, attr, value) {
//     for(var i = 0; i < array.length; i += 1) {
//         if(array[i][attr] === value) {
//             return i;
//         }
//     }
//     return -1;
// }
