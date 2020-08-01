const Player = (name, shape) => {
    return {name, shape};
}

const gameBoard = (() => {
    let board = ['','','','','','','','',''];

    const getBoard = () => board;

    const resetBoard = () => board = ['','','','','','','','',''];

    const getBoardSquare = (cellID) => board[cellID];

    

    return {getBoard, resetBoard, getBoardSquare}

})();

const game = (() => {
    const board = document.querySelector('#board')
    marker = 'X'

    const render = () => {
        
        const squareWidth = 338/3;
        const squareHeight = 340/3;
        
        for(let i = 0; i < 9; i++){
            const square = document.createElement('div')
            square.style.cssText = `width: ${squareWidth}px; height: ${squareHeight}px; border: 2px solid black; 
            font-size: 115px; display: flex; justify-content: center; align-items: center; font-family: arial;
            `
            square.textContent = 'X'
            board.appendChild(square)
            
        }
    }
    board.addEventListener('click', (e) => {
        if (e.target.textContent === ''){
        e.target.textContent = marker
        // put player switch function here
        }
    })

    return {render}
})();
game.render()
