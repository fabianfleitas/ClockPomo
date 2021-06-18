import React, { useState} from "react";
import "./App.css";
import Display from "./Components/Display";
import Session from "./Components/Session";
import Break from "./Components/Break"; 
import Help from "./Components/Help"; 


let interval;

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [breakT, setBreakT] = useState(5);
  const [session, setSession] = useState(25);
  const [playing, setPlaying] = useState(false);
  const [stopped, setStopped] = useState(true);
  const [breaking, setBreaking] = useState(false);

  /* IF the clock is stopped, play the timer, else pause it */
  const play = () => {
    if (!playing) {
      setPlaying(true);
      setStopped(false);
      interval = setInterval(() => setSeconds(prev => prev - 1), 1000); //subtract 1 every second to the seconds state
    } else {
      pause();
    }
  };

  /* Reset the clock and sound */
  const reset = () => {
    setMinutes(session);
    setSeconds(0);
    setStopped(true);
    setSession(25);
    setBreakT(5);
    setBreaking(false);
    pause();
    let audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };
/* Pause the clock and clear the playing interval */
  const pause = () => {
    setPlaying(false);
    clearInterval(interval);
  };
/* Play a song to indicate that the time is over  */
  const playBeep = () => {
    let audio = document.getElementById("beep");
    audio.currentTime = 0;
    audio.play();
  };
  
  /*Decrease a minute */
    if (seconds < 0 && minutes > 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
    }
  /* Set the session time */
    if (stopped && minutes !== session) {
      setMinutes(session);
    }
  
    /* Change from session time to break time and vice versa */
    if (minutes === 0 && seconds < 0) {
      playBeep();
      if (breaking) {
        setMinutes(session);
        setSeconds(0);
        setBreaking(false);
      } else {
        setMinutes(breakT);
        setSeconds(0);
        setBreaking(true);
      }
    }

  return (
    <div className="container">
      <h1 id="title">25+5 Clock</h1>
      <div className="clock-container">
        <Help/>
        <Display minutes={minutes} seconds={seconds} playing={playing} breaking={breaking} play={play} reset={reset}/>
        <Session session={session} setSession={setSession}/>
        <Break breakT={breakT} setBreakT={setBreakT}/>
        
      </div>
    </div>
  );
}

export default App;
