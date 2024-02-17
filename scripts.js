/*
Functions needed:
MODEL
- Create players
- Create board
- Create cells

VIEW 
- Handle input
- Update view

CONTROLLER
- Game logic
- Check win
*/

const gameBoardDOM = document.getElementById("DOM-board")
const cell0DOM = document.getElementById('cell0')
const cell1DOM = document.getElementById('cell1')
const cell2DOM = document.getElementById('cell2')
const cell3DOM = document.getElementById('cell3')
const cell4DOM = document.getElementById('cell4')
const cell5DOM = document.getElementById('cell5')
const cell6DOM = document.getElementById('cell6')
const cell7DOM = document.getElementById('cell7')
const cell8DOM = document.getElementById('cell8')

const DOM_cell_array = [cell0DOM, cell1DOM, cell2DOM, cell3DOM, cell4DOM, cell5DOM, cell6DOM, cell7DOM, cell8DOM]

const dom_obj_mapping = {}

const dom_information = document.getElementById('game-information')


const ROWS = 3;
const COLS = 3;

class Player {
  constructor(id, turn){
    this.id = id
    this.turn = turn
  }

  getID(){
    return this.id
  }

  getTurn(){
    return this.turn
  }
}

class Game {
  constructor(startingPlayer, secondPlayer){
    this.player1 = startingPlayer;
    this.player2 = secondPlayer;
    this.turn = startingPlayer;
  }

  getTurn(){
    return this.turn
  }
  flipTurn(){
    if (this.turn == this.player1){
      this.turn = this.player2
    } else {
      this.turn = this.player1
    }
  }
}

// player1 = new Player(0,0)
// player2 = new Player(1,1)

class BoardCell{
  constructor(row, col, CellDOM){
    this.row = row;
    this.col = col;
    this.dom = CellDOM;
    this.player = null;
  }

  assignPlayer(playerID){
    if (this.player === null){
      this.player = playerID
    } else {
      console.log("ERROR: Cell already assigned!")
    }
  }

  getAssignedPlayer(){
    if (this.player == null){
      return null
    } else {
      return this.player
    }
  }

  getCoord(){
    return [this.row, this.col]
  }
}

class Board{
  constructor(BoardDOM){
    this.board = [];
    for (let i = 0; i < ROWS; i++){
      for (let j=0; j<COLS; j++){
        let index = i*3 + j;
        let cell = new BoardCell(i,j,DOM_cell_array[index]);
        this.board.push(cell)
      }
    }
    this.movecount = 0;
    this.dom = BoardDOM;
  }

  getBoardState(){ //Represent the board in a 1D array 
    let boardState = [];
    this.board.forEach((cell) => {
      // console.log(cell.getCoord())
      boardState.push(cell.getAssignedPlayer())
    })
    return boardState;
  }

  getMovecount(){
    return this.movecount;
  }

  checkWin(playerID){
    // console.log(typeof(playerID))
    if (this.movecount < 5){
      return false
    }

    let boardState = this.getBoardState();


    if (playerID === boardState[0] && playerID === boardState[1] && playerID === boardState[2]){
      console.log("Case 1")
      return true
    } else if (playerID === boardState[3] && playerID === boardState[4] && playerID === boardState[5]) {
      console.log("Case 2")
      return true
    } else if (playerID === boardState[6] && playerID === boardState[7] && playerID === boardState[8]) {
      console.log("Case 3")
      return true
    } else if (playerID === boardState[0] && playerID === boardState[3] && playerID === boardState[6]) {
      console.log("Case 4")
      return true
    } else if (playerID === boardState[1] && playerID === boardState[4] && playerID === boardState[7]) {
      console.log("Case 5")
      return true
    } else if (playerID === boardState[2] && playerID === boardState[5] && playerID === boardState[8]) {
      console.log("Case 6")
      return true
    } else if (playerID === boardState[0] && playerID === boardState[4] && playerID === boardState[8]) {
      console.log("Case 7")
      return true
    } else if (playerID === boardState[2] && playerID === boardState[4] && playerID === boardState[6]) {
      console.log("Case 8")
      return true
    } else {
      console.log("Case 9")
      return false
    }
    
  }

  playerInput(x,y, playerID){
    let index = x*3+y;
    this.board[index].assignPlayer(playerID)
    this.movecount += 1;
  }
};

const board = new Board(gameBoardDOM);

const p1 = new Player(0,0);
const p2 = new Player(1,1);
const game = new Game(p1, p2);

cell0DOM.addEventListener(('click'), (e) => {
  console.log("cell 0 clicked")
  board.playerInput(0,0,game.getTurn().getID())
  renderBoard(board, DOM_cell_array)
  let win = board.checkWin(game.getTurn().getID());
  if (win === true){
    disableBoard(gameBoardDOM)
    dom_information.innerText = "Player: " + game.getTurn().getID()+1 + "wins!"
  }
  game.flipTurn()
})
cell1DOM.addEventListener(('click'), (e) => {
  board.playerInput(0,1,game.getTurn().getID())
  renderBoard(board, DOM_cell_array)
  let win = board.checkWin(game.getTurn().getID());
  if (win === true){
    disableBoard(gameBoardDOM)
    dom_information.innerText = "Player: " + game.getTurn().getID()+1 + "wins!"
  }
  game.flipTurn()
})
cell2DOM.addEventListener(('click'), (e) => {
  board.playerInput(0,2,game.getTurn().getID())
  renderBoard(board, DOM_cell_array)
  let win = board.checkWin(game.getTurn().getID());
  if (win === true){
    disableBoard(gameBoardDOM)
    dom_information.innerText = "Player: " + game.getTurn().getID()+1 + "wins!"
  }
  game.flipTurn()
})
cell3DOM.addEventListener(('click'), (e) => {
  board.playerInput(1,0,game.getTurn().getID())
  renderBoard(board, DOM_cell_array)
  let win = board.checkWin(game.getTurn().getID());
  if (win === true){
    disableBoard(gameBoardDOM)
    dom_information.innerText = "Player: " + game.getTurn().getID()+1 + "wins!"
  }
  game.flipTurn()
})
cell4DOM.addEventListener(('click'), (e) => {
  board.playerInput(1,1,game.getTurn().getID())
  renderBoard(board, DOM_cell_array)
  let win = board.checkWin(game.getTurn().getID());
  if (win === true){
    disableBoard(gameBoardDOM)
    dom_information.innerText = "Player: " + game.getTurn().getID()+1 + "wins!"
  }
  game.flipTurn()
})
cell5DOM.addEventListener(('click'), (e) => {
  board.playerInput(1,2,game.getTurn().getID())
  renderBoard(board, DOM_cell_array)
  let win = board.checkWin(game.getTurn().getID());
  if (win === true){
    disableBoard(gameBoardDOM)
    dom_information.innerText = "Player: " + game.getTurn().getID()+1 + "wins!"
  }
  game.flipTurn()
})
cell6DOM.addEventListener(('click'), (e) => {
  board.playerInput(2,0,game.getTurn().getID())
  renderBoard(board, DOM_cell_array)
  let win = board.checkWin(game.getTurn().getID());
  if (win === true){
    disableBoard(gameBoardDOM)
    dom_information.innerText = "Player: " + game.getTurn().getID()+1 + "wins!"
  }
  game.flipTurn()
})
cell7DOM.addEventListener(('click'), (e) => {
  board.playerInput(2,1,game.getTurn().getID())
  renderBoard(board, DOM_cell_array)
  let win = board.checkWin(game.getTurn().getID());
  if (win === true){
    disableBoard(gameBoardDOM)
    dom_information.innerText = "Player: " + game.getTurn().getID()+1 + "wins!"
  }
  game.flipTurn()
})
cell8DOM.addEventListener(('click'), (e) => {
  board.playerInput(2,2,game.getTurn().getID())
  renderBoard(board, DOM_cell_array)
  let win = board.checkWin(game.getTurn().getID());
  if (win === true){
    disableBoard(gameBoardDOM)
    dom_information.innerText = "Player: " + game.getTurn().getID()+1 + "wins!"
  }
  game.flipTurn()
})

function renderBoard(board, domElement){
  const boardState = board.getBoardState();
  for (let i=0; i<boardState.length; i ++){
    if (boardState[i] == 0){
      domElement[i].classList.add("red-cross")
    } else if (boardState[i] == 1) {
      domElement[i].classList.add("green-circle")
    }
  }
}

function disableBoard(BoardDOM){
  BoardDOM.classList.add("disabled")
}

