import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
    
    //this will become an array of arrays, as we fill it with the game's history
    const [history, setHistory] = useState(Array[9].fill(null));
    //isX state moving to parent component of board
    const [isX, setIsX] = useState(true);

    function handlePlay(next) {
    
        setHistory([...history, next]);
        //from the handle click method.
        //this piece of state is being lifted from the Board.js
        setIsX(!isX);
    };


    return (
        <div className='game'>
            <div>
                <Board />
            </div>
            <div className='game-info'>
                <ol></ol>
            </div>
        </div>
    );
};

export default Game;