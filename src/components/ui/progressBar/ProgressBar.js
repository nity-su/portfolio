import React from "react";
import "./progress.css";

export default function ProgressBar(props) {
  console.log(props);
  const { percentage, name, backgroundColor } = props.info;
  console.log(backgroundColor);
  const styleProgressBar = {
    backgroundColor: backgroundColor,
    width: percentage + "%",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="progress_bar">
            <div className="pro-bar">
              <small className="progress_bar_title">
                {name}
                <span> ─</span>
                <span className="progress_number">{percentage}%</span>
              </small>
              <span
                className="progress-bar-inner"
                style={styleProgressBar}
                data-value={percentage}
                data-percentage-value={percentage}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
