import React from "react";

function PlayBar({session, focusAndBreakDuration}) {

    const {focusDuration, breakDuration} = focusAndBreakDuration;
    const selectedDuration = session?.label === "Focusing" ? focusDuration : breakDuration;
    const style = {};
    if (!session) style.display = "none";
    return (
        <div className="col" style={style}>
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={100 - (session?.timeRemaining / (selectedDuration*60) * 100)} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${100 - (session?.timeRemaining / (selectedDuration*60) * 100)}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
        </div>
    )
}

export default PlayBar;