import React, { useState } from 'react';

const Square = ({ value, handleSubmit }) => { 

    return (
        <button className="square" onClick={handleSubmit} >
            {value}
        </button>
    );
};

export default Square;