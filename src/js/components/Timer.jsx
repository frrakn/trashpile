import React, { Component, PropTypes } from 'react';

const Timer = ({gameTime}) =>
  <div className="timer-component">

    {formatTime(gameTime)}

    <div className="live">
      LIVE
    </div>

  </div>;

Timer.PropTypes = {
  gameTime: PropTypes.number
};

function formatTime(time) {
  let sec_num = parseInt(time, 10);
  let hours   = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0" + hours;}
  if (minutes < 10) {minutes = "0" + minutes;}
  if (seconds < 10) {seconds = "0" + seconds;}

  return (hours +':'+ minutes +':'+ seconds);
}

export default Timer;
