import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class TeamScore extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {kills, color, name} = this.props;

    return (
      <div>
        <div className="score">
          <div className={`team-logo ${color}`} />
          {kills}
        </div>

        <span className="team-name">
          {name}
        </span>
      </div>
    );
  }
}

export default TeamScore;
