'use strict';

var React = require('react');

var Header = React.createClass({
  propTypes: {
    player:     React.PropTypes.string,
    gameStatus: React.PropTypes.string
  },
  mixins:    [],

  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
  },
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUnmount: function() {},

  render: function() {
    var text      = '';
    var className = '';

    if (this.props.gameStatus === 'open') {
      text = "Game on! Player " + this.props.player + "'s Turn";
    } else {
      text      = "Game Over. Player " + this.props.player + " Wins!";
      className = 'game-over';
    }

    return (
      <header className={className}>{text}</header>
    );
  }
});

module.exports = Header;
