import React, { Component, PropTypes } from 'react';
import Timer from './Timer';
import TeamScore from './TeamScore';
import shallowCompare from 'react-addons-shallow-compare';

export default class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className="header-component container">
        <TeamScore
          color={'red'}
          kills={this.props.redTeamKills}
        />

        <Timer
          gameTime={this.props.gameTime}
        />

        <TeamScore
          color={'blue'}
          kills={this.props.blueTeamKills}
        />
      </div>
    );
  }
}
