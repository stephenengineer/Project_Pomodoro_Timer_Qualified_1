import React from "react";
import classNames from "../utils/class-names";
import { minutesToDuration } from "../utils/duration";

function FocusDuration({focusAndBreakDuration, handleFocusChange, session}) {
    const { focusDuration } = focusAndBreakDuration;
    const style = {};
    if (session) style.opacity = "0.5";
    return (
        <div className="col">
            <div className="input-group input-group-lg mb-2" style={style}>
                <span className="input-group-text" data-testid="duration-focus">
                  {/* TODO: Update this text to display the current focus session duration */}
                  Focus Duration: {minutesToDuration(focusDuration)}
                </span>
                <div className="input-group-append">
                  {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
                  <button
                    type="button"
                    className={classNames({
                        "btn btn-secondary": true,
                        "focus-button decrease": !session})}
                    data-testid="decrease-focus"
                    onClick={handleFocusChange()}
                  >
                    <span className={classNames({
                        "oi oi-minus": true,
                        "focus decrease": !session})} />
                  </button>
                  {/* TODO: Implement increasing focus duration and disable during a focus or break session */}
                  <button
                    type="button"
                    className={classNames({
                        "btn btn-secondary": true,
                        "focus-button increase": !session})}
                    data-testid="increase-focus"
                    onClick={handleFocusChange()}
                  >
                    <span className={classNames({
                        "oi oi-plus": true,
                        "focus increase": !session})} />
                  </button>
                </div>
              </div>
        </div>
    )
}

export default FocusDuration;