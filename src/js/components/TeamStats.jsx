import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

const teamStatsMap = [
  {
    key: 'baronsKilled',
    label: 'Barons',
    abbreviation: 'BK'
  },
  {
    key: 'dragonsKilled',
    label: 'Dragons',
    abbreviation: 'DK'
  },
  {
    key: 'towersKilled',
    label: 'Towers',
    abbreviation: 'TK'
  }
]

class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <thead>
        <tr>
          <td>
            Team Stats
          </td>
          <td>
            {this.props.blueTeamName}
          </td>
          <td>
            {this.props.redTeamName}
          </td>
        </tr>
      </thead>
    );
  }
}

class TeamGold extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {blueTeamGold, redTeamGold} = this.props;

    return (
        <tr>
          <td>
            Gold
          </td>
          <td>
            {blueTeamGold}
          </td>
          <td>
            {redTeamGold}
          </td>
        </tr>
    );
  }
}

function calculateTeamGold(teamId, players) {
  return players.reduce(function(gold, player) {
    if (player.teamId === teamId) {
      return gold + player.tg;
    } else {
      return gold;
    }
  }, 0);
}

class TeamStats extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {blueTeam, redTeam, players} = this.props;

    return (
      <div className="team-stats">
        <table className="table">
          <Header
            blueTeamName={blueTeam.name}
            redTeamName={redTeam.name}
          />

          <tbody>

            <TeamGold
              blueTeamGold={calculateTeamGold(blueTeam.id, players)}
              redTeamGold={calculateTeamGold(redTeam.id, players)}
            />

            {teamStatsMap.map(function(stat) {
                return (
                  <tr key={stat.label}>
                    <td>
                      {stat.label}
                    </td>
                    <td>
                      {blueTeam[stat.key]}
                    </td>
                    <td>
                      {redTeam[stat.key]}
                    </td>
                  </tr>
                )
              }.bind(this))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default TeamStats;