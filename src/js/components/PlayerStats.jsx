import React, { Component, PropTypes } from 'react';

const playerStatsMap = [
  {
    key: 'mk',
    abbreviation: 'MK'
  },
  {
    key: 'level',
    abbreviation: 'L'
  }
];

function renderRow(player) {
  var stats = playerStatsMap.map(function(stat) {
    return (
      <td key={stat.key}>
        {player[stat.key]}
      </td>
    );
  });

  return (
    <tr key={player.summonerName}>
      <td>
        {player.summonerName}
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
          {props.players.slice(0, 5).map(function(player) {
            return renderRow(player);
          })}

          <tr>
            <td
              className="table-break"
              colSpan="4">
            </td>
          </tr>

          {props.players.slice(5, 10).map(function(player) {
            return renderRow(player);
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerStats;
