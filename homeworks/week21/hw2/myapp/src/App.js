import './style.css';
import { useState } from 'react';
function calculateWinner(square, pieceColor, x, y) {
    if (pieceColor === null) {
      return
    }
    let upDownCheck = 0
    let leftRightCheck = 0
    let rightUpCheck = 0
    let leftUpCheck = 0
    //下
    let i = x
    let j = y
    while (i+1 < 19 && pieceColor === square[i+1][y]) {
      upDownCheck++
      i++
    }
    i = x
    //上
    while (i-1 > 0 && pieceColor === square[i-1][y]) {
      upDownCheck++
      i--
    }
    i = x
    //右
    while (j+1 < 19 && pieceColor === square[x][j+1]) {
      leftRightCheck++
      j++
    }
    j = y
    // 左
    while (j-1 > 0 && pieceColor === square[x][j-1]) {
      leftRightCheck++
      j--
    }
    j = y
    //右上
    while (i-1 > 0 && j+1 < 19 && pieceColor === square[i-1][j+1]) {
      rightUpCheck++
      i--
      j++
    }
    i = x
    j = y
    //左下
    while (i+1 < 19 && j-1 > 0 && pieceColor === square[i+1][j-1]) {
      rightUpCheck++
      i++
      j--
    }
    i = x
    j = y
    //左上
    while (i-1 > 0 && j-1 > 0 && pieceColor === square[i-1][j-1]) {
      leftUpCheck++
      i--
      j--
    }
    i = x
    j = y
    //右下
    while (i+1 < 19 && j+1 < 19 && pieceColor === square[i+1][j+1]) {
      leftUpCheck++
      i++
      j++
    }
    i = x
    j = y
    if (
      upDownCheck >= 4 || leftRightCheck >= 4 || 
      rightUpCheck >= 4 || leftUpCheck >= 4 
    ) {
      console.log('贏家')
      return pieceColor;

    } else {
      upDownCheck = 0
      leftRightCheck = 0
      rightUpCheck = 0
      leftUpCheck = 0
    }
  }
function Board () {
  const [squares, setSquares] = useState(Array(19).fill(Array(19).fill(null)))
  const [currentX, setCurrentX] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const [xIsNext, setxIsNext] = useState(true)
  const handleClick = (i, j) => { 
    const newBoard = JSON.parse(JSON.stringify(squares))
    if (calculateWinner(newBoard, newBoard[currentX][currentY], currentX, currentY) || newBoard[i][j]) {
      return
    }
    newBoard[i][j] = xIsNext ? '⚫' : '◯'
    setSquares(newBoard)
    setxIsNext(!xIsNext)
    setCurrentX(i)
    setCurrentY(j)
  }
  function renderSquare(i, j) {
    return <Square boardValue={squares[i][j]} handleClick={() => handleClick(i, j)} />;
  }
  function squareArray (index) {
    return (
      <div className="board-row">
        {renderSquare(index, 0)}
        {renderSquare(index, 1)}
        {renderSquare(index, 2)}
        {renderSquare(index, 3)}
        {renderSquare(index, 4)}
        {renderSquare(index, 5)}
        {renderSquare(index, 6)}
        {renderSquare(index, 7)}
        {renderSquare(index, 8)}
        {renderSquare(index, 9)}
        {renderSquare(index, 10)}
        {renderSquare(index, 11)}
        {renderSquare(index, 12)}
        {renderSquare(index, 13)}
        {renderSquare(index, 14)}
        {renderSquare(index, 15)}
        {renderSquare(index, 16)}
        {renderSquare(index, 17)}
        {renderSquare(index, 18)}
      </div> 
    )
  }
  const winner = calculateWinner(squares, squares[currentX][currentY], currentX, currentY);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? '⚫' : '◯');
  }

  return (
    <div>
      <div className="status">{status}</div>
      {
        squares.map((square, index) => squareArray(index))
      }
    </div>
  );
}
function Square ({boardValue, handleClick}) {
    return (
      <button className="square" onClick={handleClick}>
         {boardValue}
      </button>
    );
}
function App() {
  
  return (
    <div className="App">
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    </div>
  );
}

export default App;
