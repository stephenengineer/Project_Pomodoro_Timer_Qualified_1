import React from "react";
import classNames from "../utils/class-names";
import { minutesToDuration } from "../utils/duration";

function BreakDuration({focusAndBreakDuration, handleBreakChange, session}) {
    const { breakDuration } = focusAndBreakDuration;
    const style = {};
    if (session) style.opacity = "0.5";
    return (
        <div className="col">
            <div className="float-right">
                <div className="input-group input-group-lg mb-2" style={style}>
                  <span className="input-group-text" data-testid="duration-break">
                    {/* TODO: Update this text to display the current break session duration */}
                    Break Duration: {minutesToDuration(breakDuration)}
                  </span>
                  <div className="input-group-append">
                    {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                    <button
                      type="button"
                      className={classNames({
                        "btn btn-secondary": true,
                        "break decrease": !session})}
                      data-testid="decrease-break"
                      onClick={handleBreakChange()}
                    >
                      <span className={classNames({
                        "oi oi-minus": true,
                        "break decrease": !session})} />
                    </button>
                    {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                    <button
                      type="button"
                      className={classNames({
                        "btn btn-secondary": true,
                        "break increase": !session})}
                      data-testid="increase-break"
                      onClick={handleBreakChange()}
                    >
                      <span className={classNames({
                        "oi oi-plus": true,
                        "break increase": !session})} />
                    </button>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default BreakDuration;