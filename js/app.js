var grids = document.getElementsByClassName('grid');

var turn = 0;


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
    console.log(this);
    this.style.backgroundColor='blue';
    document.querySelector('.player-announcement').textContent = "Player's 2 turn";
    turn++;
  } else {
    console.log(this);
    this.style.backgroundColor='green';
    document.querySelector('.player-announcement').textContent = "Player's 1 turn";
    turn++;
  }
}
