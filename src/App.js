import React, { useState } from 'react';
import Square from './components/Square';
import { findWinner } from './helper';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);

    function handleClick(i) {
        if (squares[i] || findWinner(squares)) {
            return;
        } 
        const newSquare = squares.slice();
        if (isX) {
            newSquare[i] = 'X';
        } else {
            newSquare[i] = 'O';
        }
        setIsX(!isX);
        setSquares(newSquare);
    }

    return (
        <React.Fragment>
            <div className='board-row'>
                <Square value={squares[0]} handleSubmit={() => handleClick(0)} />
                <Square value={squares[1]} handleSubmit={() => handleClick(1)} />
                <Square value={squares[2]} handleSubmit={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} handleSubmit={() => handleClick(3)} />
                <Square value={squares[4]} handleSubmit={() => handleClick(4)} />
                <Square value={squares[5]} handleSubmit={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} handleSubmit={() => handleClick(6)} />
                <Square value={squares[7]} handleSubmit={() => handleClick(7)} />
                <Square value={squares[8]} handleSubmit={() => handleClick(8)} />
            </div>
        </React.Fragment>
    );
};
