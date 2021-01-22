import React, { useState, useEffect } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import Incrementbar from "./increment-bar";
import StartStop from "./start-stop";
import DisplayTimer from "./display-timer";
import ProgressBar from "./progress-bar";
import { minutesToDuration } from "../utils/duration";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [focus, setFocus] = useState(25);
  const [rest, setRest] = useState(5);
  const [timeDisplay, setTimeDisplay] = useState(false);
  const [timer, setTimer] = useState(0);
  const [event, setEvent] = useState("Focus");
  const [totalTime, setTotalTime] = useState(0);
  const [pause,setPause] =useState(true)
  const stopAndReset = () => {
    setIsTimerRunning(false);
    setTimeDisplay(false);
    setFocus(25);
    setRest(5);
    setPause(true)
    setEvent("Focus")
  };

  useInterval(
    () => {
      if (timer !== 0) {
        setTimer(timer - 1);
      } else {
        new Audio(`/alarm/submarine-sonar.mp3`).play()
        if (event === "Focus") {
          setEvent("Break");
          setTimer(rest * 60);
        } else {
          setEvent("Focus");
          setTimer(focus * 60);
        }
      }
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    setTimeDisplay(true);
    setPause((prevState) => !prevState)
  }

  useEffect(() => {
    if (event === "Focus") {
      setTimer(focus * 60);
    }
    if (event === "Break") {
      setTimer(rest * 60);
    }
  }, [focus, rest, event]);

  useEffect(() => {
    if (event === "Focus") {
      setTotalTime(focus * 60);
    }
    if (event === "Break") {
      setTotalTime(rest * 60);
    }
  }, [event, focus, rest]);

  return (
    <div className="pomodoro">
      <div className="row d-flex justify-content-center mb-3">
        <div className="col-5 ">
          <Incrementbar
            event={"Focus"}
            interval={focus}
            setInterval={setFocus}
            isTimerRunning={isTimerRunning}
            timeDisplay={timeDisplay}
          />
        </div>
        <div className="col-5">
          <Incrementbar event={"Break"} interval={rest} setInterval={setRest} isTimerRunning={isTimerRunning} timeDisplay={timeDisplay} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <StartStop
            playPause={playPause}
            isTimerRunning={isTimerRunning}
            stopAndReset={stopAndReset}
            timeDisplay={timeDisplay}
            
          />
        </div>
      </div>

      
        <div>
          {/* TODO: This area should show only when a focus or break session is running or pauses */}

          <div className="row mb-2">
            <DisplayTimer timer={timer} event={event} totalTime={totalTime} pause={pause}  timeDisplay={timeDisplay}/>
          </div>
          <div className="row mb-2">
            <ProgressBar totalTime={totalTime} timer={timer}  timeDisplay={timeDisplay}/>
          </div>
        </div>
          </div>
  );
}

export default Pomodoro;
