
import React from "react"

function ProgressBar({totalTime,timer,timeDisplay}) {


if(timeDisplay) {
return (
<div className="col">
<div className="progress" style={{ height: "20px" }}>
  <div
    className="progress-bar bg-danger"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow={parseInt((totalTime - timer)/totalTime * 100)} // TODO: Increase aria-valuenow as elapsed time increases
    style={{ width : parseInt((totalTime - timer)/totalTime * 100) + "%" }} // TODO: Increase width % as elapsed time increases
  />
</div>
</div>
)}
else {
  return null
}
 
}
export default ProgressBar