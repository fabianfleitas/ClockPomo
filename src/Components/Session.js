import React from 'react';



export default function Session(props){

    return(
        <div className="session-container">
          <label className="time-label" id="session-label">
            Session Time
          </label>
          <div
            className="material-icons"
            id="session-decrement"
            onClick={() => props.setSession(props.session - 1 >= 1 ? props.session - 1 : props.session )}
          >
            remove
          </div>
          <div className="length" id="session-length">
            {props.session.toString()}
          </div>
          <div
            className="material-icons"
            id="session-increment"
            onClick={() =>
              props.setSession(props.session + 1 <= 60 ? props.session + 1 : props.session)
            }
          >
            add
          </div>
        </div>

    )
}


