import React from "react";

function PausedIndicator({session, isTimerRunning}) {
    const style = {};
    if (!session || isTimerRunning) style.display = "none";
    return (
        <h2 style={style}>PAUSED</h2>
    )
}

export default PausedIndicator;