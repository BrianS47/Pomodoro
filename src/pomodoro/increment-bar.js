import React from "react"
import {minutesToDuration} from "../utils/duration"

function Incrementbar({event,interval,setInterval,isTimerRunning ,timeDisplay}){ 

    const destringify = string => {
        string.replaceAll('"',"")
    }

  

return(


<div className="input-group input-group-lg mb-2 justify-content-center ">
               {event === "Break" ? 
              <span className="input-group-text" data-testid="duration-break"> {/*add focus or break prop*/}
                {/* TODO: Update this text to display the current break session duration */}
                {event} Duration: {minutesToDuration(interval)}
              </span> :
              
              <span className="input-group-text" data-testid="duration-focus"> {/*add focus or break prop*/}
                {/* TODO: Update this text to display the current break session duration */}
                {event} Duration: {minutesToDuration(interval)}
              </span>
              
              
              }
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                { event === "Break" ? 
                
                (<button 
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={()=> interval > 1 ? setInterval(currentCount => currentCount - 1) : setInterval(1)}
                  disabled={isTimerRunning  || timeDisplay}
                  
               > <span className="oi oi-minus" /></button>) : 
               
              
               (<button
               type="button"
               className="btn btn-secondary"
               data-testid="decrease-focus"
               onClick={()=> interval > 5 ? setInterval(currentCount => currentCount - 5) : setInterval(15)}
               disabled={isTimerRunning || timeDisplay}>
                
                
                  <span className="oi oi-minus" />
                </button>)}
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                
                {event === "Break" ?
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={()=> interval === 15 ? setInterval(15) : setInterval(currentCount => currentCount + 1)}
                  disabled={isTimerRunning ||timeDisplay}
                >
                  <span className="oi oi-plus" />
                </button>

                :
                
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-focus"
                  onClick={()=> interval === 60 ? setInterval(60) : setInterval(currentCount => currentCount + 5)}
                  disabled={isTimerRunning ||  timeDisplay}
                >
                  <span className="oi oi-plus" />
                </button>

                }
              </div>
            </div>
    
)


}






export default Incrementbar