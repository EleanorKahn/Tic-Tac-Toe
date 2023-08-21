import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
    
    //this will become an array of arrays, as we fill it with the game's history
    const [history, setHistory] = useState([Array(9).fill(null)]);
    //isX state moving to parent component of board
    const [isX, setIsX] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[history.length - 1];

    function handlePlay(next) {

        setHistory([...history, next]);
        //from the handle click method.
        //this piece of state is being lifted from the Board.js
        setIsX(!isX);
    };

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        setIsX(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let directions;
        if (move > 0) {
            directions = 'Go to move #' + move;
        } else {
            directions = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{directions}</button>
            </li>
        );
    });


    return (
        <div className='game'>
            <div>
                <Board isX={isX} squares={currentSquares} handlePlay={handlePlay}/>
            </div>
            <div className='game-info'>
                <ol></ol>
            </div>
        </div>
    );
};

export default Game;