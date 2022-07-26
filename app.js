const player = (name) => {
    const playerName = name;
    return {
        playerName
    }
}

const gameBoard = (() => {
    let board = ['o', 'o', 'x', 'x', 'o', 'x', 'o', 'x', 'o'];
    for (let i = 0; i < 9; i++) {
        const boardCell = (() => {
            const cell = document.createElement('div')
            cell.classList.add('cell');
            cell.textContent = board[i]
            document.querySelector('.board').appendChild(cell)
        })();
    }

    (function addMarks() {
        let currentMove = 0;
        const cellArr = document.querySelectorAll('.cell')
        const addXMark = (() => {
            const markChanger = ((cell) => {
                cell.addEventListener('click',
                    function () {
                        currentMove % 2 === 0 ? this.textContent = 'x' : this.textContent = 'o'
                        console.log(this)
                        console.log('BRUHHHHH');
                        currentMove++;
                    })
            });


            for (let i = 0; i < cellArr.length; i++) {
                markChanger(cellArr[i])
            }


        })();
        return {
            addXMark
        }
    })();

    return {
        board
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