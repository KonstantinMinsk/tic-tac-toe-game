import React, { useState } from 'react';
import Board from '../board/index';
import calculateWinner from '../../functions/calculate-winner';

import './game.css';

const Game = () => {

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

    return (
        <div className="game">
          <div className="game-board">
            <div className="status">{status}</div>
            <Board handleClick={handleClick} square={square} />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
}
export default Game;