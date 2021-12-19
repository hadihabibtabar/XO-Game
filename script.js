const statusDisplay = document.querySelector('.game--status');

let currentPlayer = 'X';

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

const drawMessage = () => `Game ended in a draw!`;

const winningMessage = () => `Player ${currentPlayer} has won!`;

statusDisplay.innerHTML = currentPlayerTurn();



const winningConditions = [
  [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];



function handlePlayerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.innerHTML = currentPlayerTurn();
  
 
}

function handleResultValidation(){

  // let xitems= localStorage.key('X');
  // console.log(xitems);

let isdrow=true;
  for(var elm of winningConditions){
    var A= localStorage.getItem(elm[0]);
   
    var B= localStorage.getItem(elm[1]);
   
    var C= localStorage.getItem(elm[2]);
    
    if(A==B && A==C && A!=null){

      handlePlayerChange();
      statusDisplay.innerHTML =winningMessage() ;
      win=true;
      
    }
    if(!A || !B || !C ){
      isdrow=false;
    }

  }
  if (isdrow){
    statusDisplay.innerHTML =drawMessage() ;
  }
}



var win=false;
function handleCellClick(clickedCellEvent) {
  
  if (win){return};
  const clickedCell = clickedCellEvent.target;
  
  const clickedcellindex=clickedCell.getAttribute("data-cell-index")
  if (clickedCell.innerHTML ==""){

    clickedCell.innerHTML = currentPlayer;
  window.localStorage.setItem(clickedcellindex, currentPlayer);

  
  handlePlayerChange();
  handleResultValidation();
  } 
  
}


document
  .querySelectorAll('.cell')
  .forEach(cell => cell.addEventListener('click', handleCellClick));




  document.querySelector('.game--restart').addEventListener('click', restartgame);



function restartgame(){
  document
  .querySelectorAll('.cell')
  .forEach(cell => cell.innerHTML="");
  currentPlayer='X'
  statusDisplay.innerHTML = currentPlayerTurn();
  localStorage.clear();
  win=false;
}


