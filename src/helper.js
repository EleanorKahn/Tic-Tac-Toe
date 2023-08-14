export const findWinner = (squares) => {
    const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ];

    for (let i = 0; i < win.length; i++) {
        let [a, b, c] = win[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return;
};

