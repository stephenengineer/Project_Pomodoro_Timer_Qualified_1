import React from "react";
import classNames from "../utils/class-names";

function PlayButtons({playPause, isTimerRunning, session, handleStopClick}) {
    const style = {};
    if (!session) style.opacity = "0.5";
    return (
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
            {/* TODO: Disable the stop button when there is no active session */}
            <button
              type="button"
              className={classNames({
                "btn btn-secondary": true,
                "stop-button": session})}
              data-testid="stop"
              title="Stop the session"
              style={style}
              onClick={handleStopClick()}
              disabled={!session}
            >
              <span className={classNames({
                "oi oi-media-stop": true,
                "stop-button": session})} />
            </button>
          </div>
        </div>
    )
}

export default PlayButtons;