import React, { useState } from 'react';

const Square = ({ value }) => { 
    // const handleClick = () => {
    //     setValue("X");
    // }

    return (
        <button className="square" >
            {value}
        </button>
    );
};

export default Square;