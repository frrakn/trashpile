import { connect } from 'react-redux';
import Header from '../components/Header';
import { updateTime } from '../actions/index';

function mapStateToProps(state) {
  return {
    gameTime: state.get('gameTime'),
    kills: state.get('kills')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateGameTime: gameTime => dispatch(updateTime(gameTime))
  };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
