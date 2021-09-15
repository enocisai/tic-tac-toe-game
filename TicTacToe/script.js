let mainBoard;
const humanPlayer = "O";
const machine = "X"
const winCombos = [
    [0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],[6,4,2]
]

const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none"
    mainBoard = Array.from(Array(9).keys());
    for(let i = 0; i < cells.length; i++){
    cells[i].innerText = " ";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}

  function turnClick(square) {
      if (typeof mainBoard[square.target.id]== "number"){
    turn(square.target.id, humanPlayer) 
    if (!checkTie()) turn(bestSpot(), machine); 
      }
  }

  function turn(squareId, player) {
 mainBoard[squareId] = player;
 document.getElementById(squareId).innerText= player
 let gameWon = checkWin(mainBoard, player)
 if(gameWon) gameOver(gameWon)
  }

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
   
    let gameWon = null;
    for (let[index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) >  -1)) {
            gameWon = {index: index, player: player};
            break;
        }
     }
     return gameWon;
}
function gameOver(gameWon){
   for (let index of winCombos[gameWon.index]) {
       document.getElementById(index).style.backgroundColor =
       gameWon.player == humanPlayer ? "blue" : "red";
   } 
   for (let i = 0; i < cells.length; i++){
     cells[i].removeEventListener('click', turnClick, false);
   }
   declareWinner(gameWon.player === humanPlayer ? "You win!" : "You lose");
}


function declareWinner(who){
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}
function emptyBox(){
    return mainBoard.filter( s => typeof s == "number")
}

function bestSpot() {
  return minimax(mainBoard, machine).index;
}

function checkTie() {
    if (emptyBox(). length == 0) {
    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "green";
        cells[i].removeEventListener("click", turnClick, false);
        }
       declareWinner("Tie Game") 
       return true;
    }
    return false;
}

function minimax(newBoard, player){
    let availSpots = emptyBox(newBoard);
    if (checkWin(newBoard, player)) {
        return{score: - 10};
    } else if (checkWin(newBoard, machine)) {
        return {score: 10};
    }else if (availSpots.length === 0){
        return {score: 0}
    }
    let moves = [];
    for(let i = 0; i < availSpots.length; i++) {
        let move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player == machine) {
            let result = minimax(newBoard, machine);
            move.score = result.score;
        }else {
            let result = minimax(newBoard, machine);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;
        
        moves.push(move);
    }

     let bestMove;
     if(player === machine) {
         let bestScore = -10000;
         for(let i = 0; i < moves.length; i++) {
             if (moves[i].score > bestScore){
                 bestScore = moves[i].score;
                 bestMove = i;
             }
         }
     }else {
        let bestScore = -10000;
        for(let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore){
                bestScore = moves[i].score;
                bestMove = i;
     }
        } 
}
  return moves[bestMove];
}

