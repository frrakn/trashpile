import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

const playerStatsMap = [
  {
    key: 'mk',
    abbreviation: 'MK'
  },
  {
    key: 'level',
    abbreviation: 'L'
  },
  {
    key: 'tg',
    abbreviation: 'TG'
  }
];

class Stat extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <td>
        {this.props.value || 0}
      </td>
    );
  }
}

class ExtendedKillsHeader extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <td>
        Multi
      </td>
    );
  }
}

class ExtendedKills extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {double, triple, quadra, penta} = this.props;

    return (
      <td>
        {double}
        <span className="divider-gray">/</span>
        {triple}
        <span className="divider-gray">/</span>
        {quadra}
        <span className="divider-gray">/</span>
        {penta}
      </td>
    );
  }
}

class KDA extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <td>
        {this.props.kills}
        <span className="divider-gray">/</span>
        {this.props.deaths}
        <span className="divider-gray">/</span>
        {this.props.assists}
      </td>
    );
  }
}

class Row extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      id, name, kills, assists, deaths, championName,
      doubleKills, tripleKills, quadraKills, pentaKills
    } = this.props.player;

    return (
      <tr key={id}>
        <td>
          {name}
          <span className="champ-name">
            {championName}
          </span>
        </td>

        <KDA
          kills={kills}
          assists={assists}
          deaths={deaths}
        />

        {playerStatsMap.map(function(stat) {
          return (
            <Stat
              key={this.props.player.id + stat.key}
              value={this.props.player[stat.key]}
            />
          );
        }.bind(this))}

        <ExtendedKills
          double={doubleKills}
          triple={tripleKills}
          quadra={quadraKills}
          penta={pentaKills}
        />
      </tr>
    );
  }
}

class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <thead>
        <tr>
          <td></td>
          <td>
            K
            <span className="divider-gray">/</span>
            D
            <span className="divider-gray">/</span>
            A
          </td>
          {playerStatsMap.map(function(stat) {
            return (
              <td key={stat.key}>
                {stat.abbreviation}
              </td>
            );
          })}

          <ExtendedKillsHeader />
        </tr>
      </thead>
    );
  }
}

class PlayerStats extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className="team-stats">
        <table className="table">
          <Header />
          <tbody>
            {this.props.players.map(function(player) {
              return (
                <Row
                  key={player.id}
                  player={player}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlayerStats;
