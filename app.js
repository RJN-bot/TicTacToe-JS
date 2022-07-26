const player = (name) => {
    const playerName = name;
    return {
        playerName
    }
}

const gameBoard = (() => {
    let board = ['x', 'o', 'x', 'x', 'o', 'x', 'o', 'x', 'o'];
    for (let i = 0; i < 9; i++) {
        const boardCell = (() => {
            const cell = document.createElement('div')
            cell.classList.add('cell');
            cell.textContent = board[i]
            document.querySelector('.board').appendChild(cell)
        })();
    }

    function addMarks() {
        let currentMove = 0;
        if (currenMove % 2 === 0) {
            function addXMark() {
                document.querySelector('.cell').addEventListener('click', function () {
                    this.textContent = 'x'
                })

            }
        }

    }


    return {
        board, addMarks
    }
})();

const displayController = (() => {

    return {

    }
})();





// Build the functions that allow players to add marks to a specific spot on the board, 
// and then tie it to the DOM, letting players click on the gameboard to place their marker.
// Don’t forget the logic that keeps players from playing in spots that are already taken!

// Think carefully about where each bit of logic should reside.Each little piece of functionality should be able to fit in the game, player or gameboard objects..but take care to put them in “logical” places.Spending a little time brainstorming here can make your life much easier later!