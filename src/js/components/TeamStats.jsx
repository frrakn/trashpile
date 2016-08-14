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
            {this.props.redTeamName}
          </td>
          <td>
            {this.props.blueTeamName}
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
    const {redTeamGold, blueTeamGold} = this.props;

    return (
        <tr>
          <td>
            Gold
          </td>
          <td>
            {redTeamGold}
          </td>
          <td>
            {blueTeamGold}
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
    const {teams, players} = this.props;

    return (
      <div className="team-stats">
        <table className="table">
          <Header
            redTeamName={teams[0].name}
            blueTeamName={teams[1].name}
          />

          <tbody>

            <TeamGold
              redTeamGold={calculateTeamGold(teams[0].id, players)}
              blueTeamGold={calculateTeamGold(teams[1].id, players)}
            />

            {teamStatsMap.map(function(stat) {
                return (
                  <tr key={stat.label}>
                    <td>
                      {stat.label}
                    </td>
                    <td>
                      {teams[0][stat.key]}
                    </td>
                    <td>
                      {teams[1][stat.key]}
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