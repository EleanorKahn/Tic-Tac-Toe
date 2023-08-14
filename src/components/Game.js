import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
    
    //this will become an array of arrays, as we fill it with the game's history
    const [history, setHistory] = useState(Array[9].fill(null));

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