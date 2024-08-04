// module for gameboard object
const gameBoard = (function(){
    let currentBoard = []; // the current state of the gameboard
    const addMove = function(move){
        currentBoard.push(move);
    }
    return {currentBoard,addMove};
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
    // we might not want to make this variable have this scope
    while (stateOfTheGame.continueGame){
        let playerOneMove = prompt("Player 1: Make a move (e.g., X11)");
        console.log(playerOneMove);
        gameBoard.addMove(playerOneMove);
        console.log(gameBoard.currentBoard);
        stateOfTheGame.increaseRound();
        console.log(stateOfTheGame);
        console.log(gameBoard);
        console.log("This is the current round: " + stateOfTheGame.getCurrentRound());
        break;

    }

}

gameLogic();