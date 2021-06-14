import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function PlayInfo({session, focusAndBreakDuration}) {
    const style = {};
    if (!session) style.display = "none";
    const {focusDuration, breakDuration} = focusAndBreakDuration;
    return session && (
        /* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */
        <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
                {session?.label} for {minutesToDuration(session?.label === "Focusing" ? focusDuration : breakDuration)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(session?.timeRemaining)} remaining
            </p>
        </div>
)
}

export default PlayInfo;