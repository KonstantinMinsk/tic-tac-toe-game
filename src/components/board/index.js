import React, { useState } from 'react';
import calculateWinner from '../../functions/calculate-winner';
import Square from '../square/index';
import './board.css';

const Board = () => {

    const [square, setSquare] = useState(Array(9).fill(null));
    const [walkX, setWalkX] = useState(true);
    const [score, setScore ] = useState(0);
    
    const winner = calculateWinner(square);
    let status = score === 9 
                    ? 'Draw' 
                    : winner ? ('Winner: ' + winner) : (`Next player: ${walkX ? 'X' : 'O'}`)

    const handleClick = (i) => {
        
        const squares = [ ...square ];
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = walkX ? 'X' : 'O';
        setSquare(squares);
        setWalkX(!walkX);
        setScore(score+1)
    }

    const renderSquare = (i) => {
      return <Square 
                value={square[i]} 
                onClick={() => handleClick(i)}
            />;
    }
    
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
}
export default Board;    