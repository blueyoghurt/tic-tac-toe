var grids = document.getElementsByClassName('grid');
var turn = 0;
player1moves=[];
player2moves=[];
occupiedCell =[];

console.log (grids);

for(var i=0;i<grids.length;i++){
  grids[i].addEventListener('click',checkcell,false);
}

function checkturn(){
  turn++;
  checkcell;
}

function checkcell(){
  if( (turn%2) ===0 ) {
    console.log(this.id);
    this.style.backgroundColor='blue';
    player1moves.push(this.id);
    console.log(indexOf(this));
    (occupiedCell.push(this.id)).sort;
    console.log(occupiedCell);
    document.querySelector('.player-announcement').textContent = "Player's 2 turn";
    turn++;
  } else {
    console.log(this.id);
    this.style.backgroundColor='green';
    player2moves.push(this.id);
    occupiedCell.push(this.id);
    document.querySelector('.player-announcement').textContent = "Player's 1 turn";
    turn++;
  }
}

function checkwinner (){

}
