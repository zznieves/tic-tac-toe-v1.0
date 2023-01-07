
// bundle Grid pieces together
const grid = document.getElementsByClassName('box');

let playerTurn = 0;


// refresh the page/game
function refresh() {

    location.reload();
}


// 'congratulate' helper method for checkForWinner()
function congratulate() {

    let winner = (playerTurn % 2 !==  0) ? (1) : (2);

    // announce the winner
    alert(`Congratulations player #${winner}! You've won the game!`);

    // refresh the page/game
    refresh();
}

// check for a draw
function checkForDraw() {

    const isLengthOne = (currentValue) => currentValue.textContent.length === 1;

    // if all grid pieces have a symbol, but there is no winner, declare a draw and reset the game
    if (Array.from(grid).every(isLengthOne)) {

        alert(`Grid is full. It's a draw.`);
        refresh();
    }

}


// check for winner after each move
function checkForWinner() {

    // horizontal 
    if((grid[0].textContent.length === 1) && (grid[0].textContent === grid[1].textContent) && (grid[1].textContent === grid[2].textContent)) {

        congratulate();
    }
    else if ((grid[3].textContent.length === 1) && (grid[3].textContent === grid[4].textContent) && ( grid[4].textContent === grid[5].textContent)) {

        congratulate();
    }
    else if ((grid[6].textContent.length === 1) && (grid[6].textContent === grid[7].textContent) && (grid[7].textContent === grid[8].textContent)) {

        congratulate();
    }

    // vertical
    else if ((grid[0].textContent.length === 1) && (grid[0].textContent === grid[3].textContent) && (grid[3].textContent === grid[6].textContent)) {

        congratulate();
    }
    else if ((grid[1].textContent.length === 1) && (grid[1].textContent === grid[4].textContent) && (grid[4].textContent === grid[7].textContent)) {

        congratulate();
    }
    else if ((grid[2].textContent.length === 1) && (grid[2].textContent === grid[5].textContent) && (grid[5].textContent === grid[8].textContent)) {

        congratulate();
    }

    // across
    else if ((grid[0].textContent.length === 1) && (grid[0].textContent === grid[4].textContent) && (grid[4].textContent === grid[8].textContent)) {
        
        congratulate();
    }
    else if ((grid[2].textContent.length === 1) && (grid[2].textContent === grid[4].textContent) && (grid[4].textContent === grid[6].textContent)) {

        congratulate();
    }
    else {

        // check for a draw
        checkForDraw();
        
    }

}

// eventHandler function: executes everytime a 'click' event occurs on a Grid piece
function playGame(index) {
    
    //console.log(`You clicked Grid piece #${index+1}`);

    // who's turn is it?
    playerTurn++;

    // if Grid piece already has a symbol ('X' or 'O') notify user
    if(grid[index].textContent.length === 1) {

        alert('Error: Grid piece ' + (index+1) + ' already has a symbol. Try again.');
        playerTurn--;
        return;
    }
    // if Grid piece doesn't have a symbol, add one to it
    else {
        (playerTurn % 2 !== 0) ? (grid[index].innerHTML = '<h2>X</h2>') : ( grid[index].innerHTML = '<h2>O</h2>');

        // check for winner after each move
        checkForWinner();
    }
}

// add an eventListener and eventHandler to all Grid pieces
for(let i = 0; i < grid.length; i++) {

    grid[i].addEventListener('click', () => { playGame(i) });
}
