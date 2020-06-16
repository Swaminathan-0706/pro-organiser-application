import React from 'react';
import './Board.css'

function Board(props) {
    console.log(props);
    return (
        <>  
            <div className="nav">
            <h1>Board</h1>
            <button className="delBoard">Delete Board</button>
            </div>
        </>
    )
}

export default Board
