const boardCells = document.querySelectorAll(".cell");

//Create a factory to create buttons
const createBoardCell = (domCell) => {
  //This constructor should be the one controlling the dom elements
  //We must create a listener to listen to whose turn it is and add the x or o accordingly
  var player;

  const getPlayer = () => {
    return this.player;
  };

  domCell.addEventListener("click", (event) => {
    // player = playerTurn;
    console.log(event);
    console.log(this);
    // playerTurn = playerTurn == 0 ? 1 : 0;
    console.log(player);
    if (player === 0) {
      domCell.classList.add("player0");
    } else {
      domCell.classList.add("player1");
    }
  });
};

//Create a gameboard
const createBoard = () => {
  //Player 0 will be X
  var playerTurn = 0;
  var turnNumber = 0;
  const board = {
    cellZero: -1,
    cellOne: -1,
    cellTwo: -1,
    cellThree: -1,
    cellFour: -1,
    cellFive: -1,
    cellSix: -1,
    cellSeven: -1,
    cellEight: -1,
  };

  const getPlayerTurn = () => {
    return playerTurn;
  };

  const getBoard = () => {
    return board;
  };

  const getTurnNumber = () => {
    return turnNumber;
  };
  //This function should check who is the winner
  //To determine the winner, check the playerTurn variable
  const checkWin = () => {
    if (turnNumber < 5) {
      return false;
    }
    if ((board[cellZero] == board[cellOne]) == board[cellTwo]) {
      return true;
    } else if ((board[cellThree] == board[cellFour]) == board[cellFive]) {
      return true;
    } else if ((board[cellSix] == board[cellSeven]) == board[cellEight]) {
      return true;
    } else if ((board[cellZero] == board[cellFour]) == board[cellSix]) {
      return true;
    } else if ((board[cellOne] == board[cellFour]) == board[cellSeven]) {
      return true;
    } else if ((board[cellTwo] == board[cellFive]) == board[cellEight]) {
      return true;
    } else if ((board[cellZero] == board[cellFour]) == board[cellEight]) {
      return true;
    } else if ((board[cellTwo] == board[cellFour]) == board[cellSix]) {
      return true;
    }
  };

  boardCells.forEach((cell) => {
    createBoardCell(cell);
  });

  return {
    getBoard,
    getPlayerTurn,
    getTurnNumber,
    checkWin,
  };
};

//Create players
const createPlayer = (name) => {
  var score = 0;
  var playerName = name;

  const incrementScore = function () {
    score += 1;
  };

  const getPlayerScore = function () {
    return score;
  };

  const getPlayerName = function () {
    return playerName;
  };

  return { incrementScore, getPlayerScore, getPlayerName };
};

createBoard();
