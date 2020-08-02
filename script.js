

const gameBoard = (() => {
    let boardArray = ['','','','','','','','',''];

    ;

    const resetBoard = () => {
        boardArray = ['','','','','','','','',''];
        game.squares.forEach((square) => {
            square.textContent = ''
        })
    }

    

    const updateBoard = (square, marker) => {
        boardArray[square] = marker
    }

    const checkWin = () => {
        let win;
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],//horizontal
            [0, 3, 6], [1, 4, 7], [3, 5, 8],//vertical
            [0, 4, 8], [2, 4, 6] //diagonal
        ]
        
        winCombos.forEach(combo =>{
            let mappedCombo = combo.map((index) => boardArray[index]);
            
            if (mappedCombo.every((square) => square == 'X')){
                win = 'X';
                
            } else if (mappedCombo.every((square) => square == 'O')){
                win = 'O';
                
            } else if(boardArray.every((square) => square !== '' && win !== 'X' && win !== 'O')){
                win = 'tie';
                
            };

            
        })
        return win
        
    }

    return {resetBoard, boardArray, updateBoard, checkWin}

})();

const game = (() => {
    const board = document.querySelector('#board');
    const squares = Array.from(document.querySelectorAll('.square'))
    let marker = 'X';
    let turn = 'p1';
    let player1 = ' ';
    let player2 = ' ';

    const render = () => {
        let P1 = document.createElement('p');
        let P2 = document.createElement('p');
        let header = document.querySelector('#header')
        P1.textContent = player1;
        P2.textContent = player2;
        header.appendChild(P1);
        header.appendChild(P2);
    }
        

    

    const playerTurn = (e) => {
        gameBoard.updateBoard(e.target.id-1, marker)
        
        winner = gameBoard.checkWin()
        
        if (winner == 'X'){
            alert('Player1 Wins!')
            gameBoard.resetBoard()
            
        } else if (winner == 'O'){
            alert('Player2 Wins!')
            gameBoard.resetBoard()
            
        } else if (winner === 'tie') {
            alert('It\'s a tie!')
            gameBoard.resetBoard()
            
        };

        
        
        if (turn === 'p1'){
            marker = 'O';
            turn = 'p2';
        } else if (turn === 'p2'){
            marker = 'X'
            turn = 'p1';
        };

    }



    board.addEventListener('click', (e) => {
        if (e.target.textContent === ''){
        e.target.textContent = marker
        playerTurn(e)
        }
    })

    //form to set names
    function enter(){
        let form = document.getElementById('name-set');
        player1 = document.getElementById("P1name").value;
        player2 = document.getElementById("P2name").value;
        
        render()
        form.remove()
    }

    let submit = document.querySelector('#submit')
    submit.addEventListener('click', enter)

    return {marker, render, squares};
})();
game.render()