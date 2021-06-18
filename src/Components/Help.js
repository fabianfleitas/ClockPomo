import React, { useState } from "react";

export default function Help(props) {
  const [modal, setModal] = useState(false);

  /* Activate or disable the help modal */
  const activateModal = () => {
    setModal((prev) => !prev);
  };

  /* Change the display style of the modal */
  const showModal = () => {
    return {
      display: modal ? "block" : "none",
    };
  };

  return (
    <div className="help-section">
      <div className="material-icons" id="help-icon" onClick={activateModal}>
        help_outline
      </div>

      <div className="help-modal" style={showModal()}>
        <div className="help-content">
          <span className="material-icons" id="close-help" onClick={activateModal}>
            close
          </span>
          <p className="info">
            {" "}
            The Pomodoro Technique is a time management method developed by
            Francesco Cirillo in the late 1980s that uses a timer to break down
            work into intervals, traditionally 25 minutes in length, separated
            by short breaks.
          </p>
          <a
            className="more-info"
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          >
            More info
          </a>
          <p className="credits">
            {" "}
            Made with ❤ by{" "}
            <a
              href="https://fabianf.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Fabián Fleitas{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
