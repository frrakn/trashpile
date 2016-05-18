import React, { Component, PropTypes } from 'react';

const TeamScore = ({color, kills}) =>
  <div className="score">
    <div className={`team-logo ${color}`} />
    {kills}
  </div>;

TeamScore.PropTypes = {
  color: PropTypes.string,
  kills: PropTypes.number
};

export default TeamScore;
