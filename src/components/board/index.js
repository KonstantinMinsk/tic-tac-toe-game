import React, { useState } from 'react';
import Square from '../square/index';
import './board.css';

const Board = () => {

    const [square, setSquare] = useState(Array(9).fill(null));
    
    const handleClick = (i) => {
        const squares = [ ...square ];
        squares[i] = 'X';
        setSquare(squares);
    }

    const renderSquare = (i) => {
      return <Square 
                value={square[i]} 
                onClick={() => handleClick(i)}
            />;
    }

    const status = 'Next player: X';
    
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