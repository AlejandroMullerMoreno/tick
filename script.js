// module for gameboard object
const gameBoard = (function(){
    let currentBoard = []; // the current state of the gameboard
    // some code here
    return {}; // return an empty object for now
})();

function Player(){
    // some properties of a player

    return {}; // return an empty object for now
}

function gameLogic(){
    // we might not want to make this variable have this scope
    const continueGame = true;
    while (continueGame){
        let playerOneMove = prompt("Player 1: Make a move (e.g., Xon11)");
        console.log(playerOneMove);
        break;

    }

}

gameLogic();