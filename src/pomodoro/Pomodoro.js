import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import BreakDuration from "./BreakDuration";
import FocusDuration from "./FocusDuration";
import PausedIndicator from "./PausedIndicator";
import PlayBar from "./PlayBar";
import PlayButtons from "./PlayButtons";
import PlayInfo from "./PlayInfo";

// These functions are defined outside of the component to insure they do not have access to state
// and are, therefore more likely to be pure.

/**
 * Update the session state with new state after each tick of the interval.
 * @param prevState
 *  the previous session state
 * @returns
 *  new session state with timing information updated.
 */
function nextTick(prevState) {
  if (!prevState) return null;
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}

/**
 * Higher order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusDuration
 *    the current focus duration
 * @param breakDuration
 *    the current break duration
 * @returns
 *  function to update the session state.
 */
function nextSession(focusDuration, breakDuration) {
  /**
   * State function to transition the current session type to the next session. e.g. On Break -> Focusing or Focusing -> On Break
   */
  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        timeRemaining: breakDuration * 60,
      };
    }
    return {
      label: "Focusing",
      timeRemaining: focusDuration * 60,
    };
  };
}

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // The current session - null where there is no session running
  const [session, setSession] = useState(null);

  // ToDo: Allow the user to adjust the focus and break duration.
  const [focusAndBreakDuration, setFocusAndBreakDuration] = useState({
    focusDuration: 25,
    breakDuration: 5,
  });
  const { focusDuration, breakDuration } = focusAndBreakDuration;

  /**
   * Custom hook that invokes the callback function every second
   *
   * NOTE: You will not need to make changes to the callback function
   */
  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );

  /**
   * Called whenever the play/pause button is clicked.
   */
  function playPause() {
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  const handleFocusAndBreakChange = ({ target }) => {
    let newFocusDuration = focusDuration;
    let newBreakDuration = breakDuration;
    if (target.className.includes("focus")) {
      newFocusDuration = target.className.includes("decrease")
        ? Math.max(5, focusDuration - 5)
        : Math.min(60, focusDuration + 5);
    }
    if (target.className.includes("break")) {
      newBreakDuration = target.className.includes("decrease")
        ? Math.max(1, breakDuration - 1)
        : Math.min(15, breakDuration + 1);
    }
    setFocusAndBreakDuration({
      focusDuration: newFocusDuration,
      breakDuration: newBreakDuration,
    });
  };

  const handleStopClick = ({ target }) => {
    if (target.className.includes("stop-button")) {
      setSession(null);
      setIsTimerRunning(false);
    }
  };

  return (
    <div className="pomodoro">
      <div className="row">
        <FocusDuration
          focusAndBreakDuration={focusAndBreakDuration}
          handleFocusChange={() => handleFocusAndBreakChange}
          session={session}
        />
        <BreakDuration
          focusAndBreakDuration={focusAndBreakDuration}
          handleBreakChange={() => handleFocusAndBreakChange}
          session={session}
        />
      </div>
      <div className="row">
        <PlayButtons
          playPause={playPause}
          isTimerRunning={isTimerRunning}
          session={session}
          handleStopClick={() => handleStopClick}
        />
      </div>
      <div>
        <div className="row mb-2">
          <PlayInfo
            session={session}
            focusAndBreakDuration={focusAndBreakDuration}
          />
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <PausedIndicator session={session} isTimerRunning={isTimerRunning} />
        </div>
        <div className="row mb-2">
          <PlayBar
            session={session}
            focusAndBreakDuration={focusAndBreakDuration}
          />
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
