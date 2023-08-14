import React, { useState } from 'react';
import Square from './components/Square';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    return (
        <React.Fragment>
            <div className='board-row'>
                <Square value={squares[0]} />
                <Square value={squares[0]}/>
                <Square value={squares[0]}/>
            </div>
            <div className='board-row'>
                <Square value={squares[0]}/>
                <Square value={squares[0]}/>
                <Square value={squares[0]}/>
            </div>
            <div className='board-row'>
                <Square value={squares[0]}/>
                <Square value={squares[0]}/>
                <Square value={squares[0]}/>
            </div>
        </React.Fragment>
    );
};
