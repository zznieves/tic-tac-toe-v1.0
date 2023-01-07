
// bundle Grid pieces together
const grid = document.getElementsByClassName('box');

let playerTurn = 0;


// check for winner after each move
function checkForWinner() {

}

// eventHandler function: executes everytime a 'click' event occurs on a Grid piece
function playGame(index) {
    
    //console.log(`You clicked Grid piece #${index+1}`);

    // who's turn is it?
    playerTurn++;

    // if Grid piece already has a symbol ('X' or 'O') notify user
    if(grid[index].textContent.length === 1) {

        alert('Error: Grid piece' + (index+1) + 'already has a symbol. Try again.');
        playerTurn--;
        return;
    }
    // if Grid piece doesn't have a symbol, add one to it
    else {
        (playerTurn % 2 !== 0) ? (grid[index].innerHTML = '<h2>X</h2>') : ( grid[index].innerHTML = '<h2>O</h2>');

        // check for winner after each move
        //checkForWinner();
    }
}

// add an eventListener and eventHandler to all Grid pieces
for(let i = 0; i < grid.length; i++) {

    grid[i].addEventListener('click', () => { playGame(i) });
}
