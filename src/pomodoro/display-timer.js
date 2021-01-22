import React from "react"
import {secondsToDuration} from "../utils/duration"

function DisplayTimer({timer,event,totalTime,pause,timeDisplay}) {
 
    
if(timeDisplay){
return (


<div className="col"> 
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">{event === "Focus" ? "Focusing" : "On Break"} for { totalTime === 3600 ? "60:00" : secondsToDuration(totalTime)} minutes</h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              { timer === 3600 ? "60:00" : secondsToDuration(timer)} remaining
            </p>
            {pause === true ? 
            <h3>
             PAUSED
            </h3> : null}
 
          </div>

)} else {
  return null
}


}

export default DisplayTimer