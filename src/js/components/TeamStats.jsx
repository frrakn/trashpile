import React, { Component, PropTypes } from 'react';

const teamStatsMap = [
  {
    key: 'gold',
    label: 'Gold',
    abbreviation: 'TK'
  },
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

const TeamStats = function(props) {
  const { teams } = props;

  return (
    <div className="team-stats">
      <table className="table">
        <thead>
          <tr>
            <td>
              Team Stats
            </td>
            <td>
              Team 1
            </td>
            <td>
              Team 2
            </td>
          </tr>
        </thead>
        <tbody>
          {teamStatsMap.map(function(stat) {
              return (
                <tr key={stat.label}>
                  <td>
                    {stat.label}
                  </td>
                  <td>
                    {props.teams[0][stat.key]}
                  </td>
                  <td>
                    {props.teams[1][stat.key]}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default TeamStats;