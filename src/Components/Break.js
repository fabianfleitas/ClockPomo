import React from 'react';



export default function Break(props){
    return(
        <div className="break-container">
          <label className="time-label" id="break-label">
            Break Time
          </label>
          <div
            className="material-icons"
            id="break-decrement"
            onClick={() => props.setBreakT(props.breakT - 1 >= 1 ? props.breakT - 1 : props.breakT)}
          >
            remove
          </div>
          <div className="length" id="break-length">
            {props.breakT.toString()}
          </div>

          <div
            className="material-icons"
            id="break-increment"
            onClick={() => props.setBreakT(props.breakT + 1 <= 60 ? props.breakT + 1 : props.breakT)}
          >
            add
          </div>
        </div>
    )
}