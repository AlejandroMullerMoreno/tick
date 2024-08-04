// module for gameboard object
const gameBoard = (function(){
    let currentBoard = []; // the current state of the gameboard
    const addMove = function(move){
        currentBoard.push(move);
    }
    const getLengthOfBoard = function(){
        return currentBoard.length;
    }
    return {currentBoard,addMove,getLengthOfBoard};
})();

const stateOfTheGame = (function (){
    let continueGame = true;
    let rounds = 0;
    const increaseRound = function(){
        rounds = rounds + 1;
    }
    const endGame = function(){
        continueGame = false;
    }
    const getCurrentRound = function(){
        return rounds;
    }
    return {continueGame,rounds,increaseRound,endGame,getCurrentRound};


})();

function Player(){
    // some properties of a player

    return {}; // return an empty object for now
}

function gameLogic(){
    while (stateOfTheGame.continueGame){
        let playerOneMove = prompt("Player 1: Make a move (e.g., X11)");
        // console.log(playerOneMove);
        gameBoard.addMove(playerOneMove);
        if (gameBoard.getLengthOfBoard() >= 5){
            // check to see if a player has won
            console.log(gameBoard);
            console.log("Some player might have won!!!");
            break;
        }
        let playerTwoMove = prompt("Player 2: Make a move (e.g., O11)");
        gameBoard.addMove(playerTwoMove);
        if (gameBoard.getLengthOfBoard() >= 5){
            // check to see if a player has won
            console.log("Some player might have won!!!");
            break;
        }
        // console.log(gameBoard.currentBoard);
        stateOfTheGame.increaseRound();
        // console.log(stateOfTheGame);
        // console.log(gameBoard);
        // console.log("This is the current round: " + stateOfTheGame.getCurrentRound());
        // console.log("This is the current board's length: " + gameBoard.getLengthOfBoard());

    }

}

gameLogic();