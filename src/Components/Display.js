import React from "react";

export default function Display(props) {
  return (
    <div className="display-container">
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
      <label className="time-label" id="timer-label">
        {props.breaking ? "Take a Break!" : "Session"}
      </label>
      <div className="length" id="time-left">
        {props.minutes <= 9 && props.seconds <= 9
          ? "0" +
            props.minutes.toString() +
            ":" +
            "0" +
            props.seconds.toString()
          : props.minutes <= 9 && props.seconds > 9
          ? "0" + props.minutes.toString() + ":" + props.seconds.toString()
          : props.minutes > 9 && props.seconds <= 9
          ? props.minutes.toString() + ":" + "0" + props.seconds.toString()
          : props.minutes.toString() + ":" + props.seconds.toString()}
      </div>

      <div className="material-icons" id="start_stop" onClick={props.play}>
        {props.playing ? "pause" :"play_arrow"}
      </div>
      <div className="material-icons" id="reset" onClick={props.reset}>
        refresh
      </div>
    </div>
  );
}
