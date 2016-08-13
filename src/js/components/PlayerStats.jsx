import React, { Component, PropTypes } from 'react';

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
    key: 'xp',
    abbreviation: 'XP'
  }
];

function renderRow(player) {
  var stats = playerStatsMap.map(function(stat) {
    return (
      <td key={stat.key + player.id}>
        {player[stat.key] || 0}
      </td>
    );
  });

  return (
    <tr key={player.id}>
      <td>
        {player.name}
      </td>
      <td>
        {player.kills}
        <span className="divider-gray">/</span>
        {player.deaths}
        <span className="divider-gray">/</span>
        {player.assists}
      </td>
      {stats}
    </tr>
  );
}

const PlayerStats = function(props) {
  return (
    <div className="team-stats">
      <table className="table">
        <thead>
          <tr>
            <td>
            </td>
            <td>
              K
              <span className="divider-gray">/</span>
              D
              <span className="divider-gray">/</span>
              A
            </td>
            {playerStatsMap.map(function(stat) {
              return (
                <td key={stat.abbreviation}>
                  {stat.abbreviation}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.players.map(function(player) {
            return renderRow(player);
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerStats;
