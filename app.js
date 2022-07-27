const player = (name) => {
    const playerName = name;
    return {
        playerName
    }
}

const gameBoard = (() => {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell');
        document.querySelector('.board').appendChild(cell)
    }
    (function addMarks() {
        let currentMove = 0;
        const cellArr = document.querySelectorAll('.cell')
        const addXMark = (() => {
            const markChanger = ((cell) => {
                cell.addEventListener('click',
                    function () {
                        if (this.textContent == '') {
                            currentMove % 2 === 0 ? this.textContent = 'x' : this.textContent = 'o'
                            currentMove++;
                        }
                        else {
                            alert('That move is invalid')
                        }

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


// Build the logic that checks for when the game is over!
//  Should check for 3 -in -a - row and a tie.

const gameChecker = () => {

}